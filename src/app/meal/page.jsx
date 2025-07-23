import Image from 'next/image'
import MealInput from './mealInput/MealInput'
export default async function Meal({searchParams}) {
    const quire = await searchParams
  
    const getData = async ()=>{
        try{
            const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${quire.search}`)
        const data = await res.json()
        // setMeal(data.meals || [])
        return data.meals;
        }catch(error){
            console.log(error);
        return[]

        }

    }
  const meals =await getData()
  return (
    <div>Meal
        <div>
        <MealInput></MealInput>
        </div>
        <div className='grid grid-cols-4 gap-4'>
            {meals?.map(d => <div className='border rounded-2xl p-3'>
                {/* <img src={d.} alt="" /> */}
                  <Image
      src={d.strMealThumb}
      width={600}
      height={600}
      alt="Picture of the author"
    />
            <p>{d.strMeal}</p>
            <p>{d.strCategory}</p>
        </div>)}
        </div>
    </div>
  )
}
