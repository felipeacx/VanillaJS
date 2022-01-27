const {Router} = require("express")
const router = Router()
const { default: axios } = require("axios");

router.get("/get", async (req, res) => {
  try {
    const token = "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"
    const url = "https://devtestrecruitte.myshopify.com/admin/api/2022-01/products.json"
    const response = await axios.get(url,
      {
        headers: {
          "X-Shopify-Access-Token": token
        }
      }
    )
    console.log("[")
    response.data.products.map((element) => {
      console.log("\t",element.title, "=> {",
        "\n\t\t\'price':"+element.variants[0].price+",",
        "\n\t\t'status':'"+element.status+"',",
        "\n\t\t'created_at':'"+element.created_at.substring(0,10)+"'",
        "\n\t},")
    })
    console.log("]")
    res.json({
      successful: true,
      body: response.data
    })
  } catch (error) {
    res.json({
      successful: false,
      message: "Error: " + error,
    })
  }
})
// Función con la Petición inicial
const peticion = async (req, res) => {
  try {
    const token = "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"
    const url = "https://devtestrecruitte.myshopify.com/admin/api/2022-01/products.json"
    const response = await axios.get(url,
      {
        headers: {
          "X-Shopify-Access-Token": token
        }
      }
    )
    console.log("[")
    response.data.products.map((element) => {
      console.log("\t",element.title, "=> {",
        "\n\t\t\'price':"+element.variants[0].price+",",
        "\n\t\t'status':'"+element.status+"',",
        "\n\t\t'created_at':'"+element.created_at.substring(0,10)+"'",
        "\n\t},")
    })
    console.log("]")
  } catch (error) {
    console.log(error)
  }
}
// Realizar la petición al iniciar el proyecto
peticion()

module.exports = router