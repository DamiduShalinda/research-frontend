import axios, { AxiosResponse } from 'axios'
import React from 'react'
import { API_ROUTES } from '../apiroutes'
import { Keyword } from '../models/keyword'
import Loading from './loading/Loading'

const KeywordSelection:React.FC = () => {

    const [keywords , setKeywords] = React.useState<Keyword[]>([])
    const [loading , setLoading] = React.useState<boolean>(true)

    React.useEffect(() => {
        axios.get(API_ROUTES.keywords)
            .then(
                (res : AxiosResponse<Keyword[]>) => {
                    setKeywords(res.data)
                    setLoading(false)
                })
            .catch((err) => console.log(err))
    }
    , [])

    return (
        <>
          {loading ? (
            <Loading />
          ) : (
            <div>
              {keywords ? (
                <>
                  <div className='flex flex-col gap-2'>
                    <h1 className='text-3xl'>Keywords</h1>
                    <div className='flex flex-wrap gap-2'>
                      {keywords.map((keyword) => (
                        <div key={keyword.keyword} className='bg-gray-200 rounded p-2'>
                          {keyword.keyword}
                        </div>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div>No keywords found.</div>
              )}
            </div>
          )}
        </>
      );
      
}

export default KeywordSelection