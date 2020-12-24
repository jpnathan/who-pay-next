import React, { useEffect, useState } from "react"
import fetch from "node-fetch"

const SHOW_WHO_PAY_NEXT = true
const PERSON_PER_MONTH = {
  9: "Pedro",
  10: "Andre",
  11: "Douglas",
  0: "Phillip",
  1: "Pedro",
  2: "Andre",
  3: "Douglas",
  4: "Phillip",
  5: "Pedro",
  6: "Andre",
  7: "Douglas",
  8: "Phillip",
}

function getPayerOfTheMonth(showWhoPayNext) {
  const monthNumber = new Date().getMonth();
  const month = monthNumber === 11 ? 0 : monthNumber + 1;
  return (
    (showWhoPayNext && PERSON_PER_MONTH[month]) ||
    PERSON_PER_MONTH[monthNumber]
  )
}

function getEuroConvertedValue() {
  return fetch("https://api.exchangeratesapi.io/latest")
    .then(response => response.json())
    .then(result => (46 / result.rates.BRL).toFixed(2))
}

export default function Home() {
  const [valueInEuros, setValueInEuros] = useState();
  useEffect(() => {
    getEuroConvertedValue().then(result => setValueInEuros(result))
  }, [])

  return (
    <div className="root-container">
      <div className="container">
        <div className="container__content">{getPayerOfTheMonth()}</div>
      </div>
      <div className="container container__content-details">
        Month: {new Date().toLocaleString("default", { month: "long" })}
      </div>
      <div className="container container__content-details">
        Value in Real: R$ 45,90
      </div>
      <div className="container container__content-details">
        Value in Euros: {valueInEuros} + taxes
      </div>
      <div className="container container__content-details">
        Until day: 5/mês
      </div>
      <div className="container container__content-details">
        Who pay next: {getPayerOfTheMonth(SHOW_WHO_PAY_NEXT)}
      </div>
    </div>
  )
}
