//machine learnig search box
import React from 'react'

interface Props {
   onSubmitButton : (searchTerm : string) => void
}

const SearchMeals:React.FC<Props> = ({onSubmitButton} : Props) => {

    const [searchTerm, setSearchTerm] = React.useState<string[]>([])

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
      onSubmitButton(params)
      }
      


  return (
    <div className='flex flex-col gap-3 items-center justify-center my-5 mx-3'>
    <div className="flex w-full items-center space-x-2 md:w-1/3">
      <input
        className="flex h-10 w-full rounded-md border border-black/30 bg-transparent px-3 py-2 text-sm placeholder:text-gray-600 focus:outline-none focus:ring-1 focus:ring-black/30 focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-50"
        type="text"
        placeholder="Search for meals"
        onChange={handleOnChange}
      ></input>
      <button
        type="button"
        className="rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
        onClick={handleOnClick}
      >
        Search
      </button>
    </div>
        <p className='flex flex-row items-start gap-2'>{searchTerm.map((item) => {
            return (
                <span key={item} 
                className="rounded-md border border-black px-2 py-1 text-sm font-semibold text-black shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                  >{item}</span>
            )
        })}</p>
    </div>
  )
}

export default SearchMeals