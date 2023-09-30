import axios from 'axios';
import React from 'react'
import { API_ROUTES } from '../apiroutes';

const SearchMeals:React.FC = () => {

    const [searchTerm, setSearchTerm] = React.useState<string[]>([])
    const [ recommandations, setRecommandations] = React.useState<string[]>([])

    const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
      
        if (value.includes(',')) {
          const tempData: string[] = value.split(',');
          tempData.forEach((item, index) => {
            tempData[index] = item.trim().toLowerCase();
          });
          setSearchTerm(tempData);
        }
      };

     const handleOnClick = () => {
      const params =  searchTerm.map(meal => `meal=${meal}`).join('&');
      console.log(params);

      axios.get(API_ROUTES.search(params))
        .then((res) => {
            setRecommandations(res.data.meals)
        })
        .then((err) => console.log(err))
      }
      


  return (
    <div className='flex flex-col gap-3 items-center justify-center'>
        SearchMeals
        <div className="flex flex-row items-center w-full justify-center gap-3">
            <input
                type="text"
                placeholder="Search Meals"
                onChange={(e) => handleOnChange(e)}
                className='border-2 border-black p-1 w-1/2 rounded-md'/>
            <button 
                type='button' 
                onClick={() => handleOnClick()}
                className='bg-red-200 p-2 rounded-md'
                >Search</button>
        </div>
        <p className='flex flex-row items-start gap-2'>{searchTerm.map((item) => {
            return (
                <span key={item} className='border p-2'>{item}</span>
            )
        })}</p>
        <p className='flex flex-col items-start gap-2'>{recommandations.map((item) => {
            return (
                <span key={item} className='border p-2'>{item}</span>
            )
        })
            
            }</p>
    </div>
  )
}

export default SearchMeals