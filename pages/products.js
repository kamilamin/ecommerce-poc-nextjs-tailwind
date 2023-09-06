import React from 'react'

const products = (props) => {
  return (
    <div className='container mx-auto px-4'>
      <section className="text-gray-600 body-font">
        <div className="container px-5 md:py-24 mx-auto">
          <div className="flex flex-wrap w-full md:mb-20">
            <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Product List - MyShop {props.name}</h1>
              <div className="h-1 w-20 bg-indigo-500 rounded"></div>
            </div>
          </div>
          <div className="flex flex-wrap -m-4">
            {props.products.data.map((item, i) => {
              return (
                <div key={i} className="xl:w-1/4 md:w-1/2 p-4">
                  <div className="bg-gray-100 p-6 rounded-lg">
                    <img className="h-80 rounded m-auto mb-8" src={item.attributes.image.data && `http://localhost:1337${item.attributes.image.data.attributes.url}`} alt="content" />
                    <h3 className="tracking-widest text-indigo-500 text-xs font-medium title-font">{item.attributes.category}</h3>
                    <h2 className="text-lg text-gray-900 font-medium title-font mb-4">{item.attributes.title}</h2>
                    <div className='hidden bg-red-800 bg-green-800 bg-purple-800 bg-white bg-yellow-500'></div>
                    <button className={"border-2 border-gray-300 ml-1 rounded-full w-6 h-6 focus:outline-none " + `bg-${item.attributes.color}-800`} ></button>
                    <p className="leading-relaxed text-base">{item.attributes.description}</p>
                    <button className="my-2 text-white bg-indigo-500 border-0 py-1 md:py-2 px-2 md:px-4 focus:outline-none hover:bg-indigo-600 rounded text-sm">Buy now</button>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
    </div>
  )
}

export async function getServerSideProps(context) {
  let headers = { Authorization: "Bearer 2f5452edb13de1d2613a8c480a8ac88ac98bbeb6d700b85e50c0f45b0cbbd844ef45816e9583af950dacd7285e11b23f863280fd3711a88e9b4f21134026a94719df350f7ac3fc33c7135fa0a471325c93828b8d7b23b22ee94e0e8876612e7d4a3f106b47f11cd2dab9f4c999058ff3cbfd02bc77cfe2c191230b49ce08bd98" }
  let a = await fetch("http://127.0.0.1:1337/api/products?populate=*", {
    headers: headers
  })
  let products = await a.json()
  return {
    props: { products }
  }
}

export default products
