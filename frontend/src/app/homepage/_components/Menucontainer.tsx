"use client";
type FoodProps = {
  foodName: string;
  image: string;
  ingredients: string;
  price: number;
  _id: string;
};

type PropsType = {
  foods: Record<string, FoodProps[]>;
};

export const MenuContainer = ({ foods }: PropsType) => {
  const keys = Object.keys(foods);
  return (
    <div className=" w-full h-full  ">
      {keys.map((el) => {
        return (
          <div key={el} className="grid grid-rows-3  ">
            <div>
              <h2 className="text-4xl">{el}</h2>
            </div>

            {foods[el].slice(0, 6).map((foods) => {
              return (
                <div className="flex flex-col justify-center items-center gap-5 w-[397px] h-[342px] shadow-lg rounded-[20px] bg-[#FFFFFF]">
                  <img
                    src={foods.image}
                    alt=""
                    className="w-[365px] h-[210px] rounded-xl"
                  />
                  <div className="flex flex-col gap-4">
                    <div className="flex flex-row gap-40 ">
                      <h3 className="text-[#EF4444] font-semibold text-[24px]">
                        {foods.foodName}
                      </h3>
                      <p className="text-[#09090B] text-[18px] font-semibold">
                        ${foods.price}
                      </p>
                    </div>
                    <div>
                      <p className="text-[#09090B] text-[14px] font-normal">
                        {foods.ingredients}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
