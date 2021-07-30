import numeral from 'numeral'

const dollarFilter = function(value) {
   return value ? numeral(value).format('($ 0.00a') : '$ 0'
}

const percentFilter = function(value) {
   return value ? `${Number(value).toFixed(2)}%` : '0%'
}

export { dollarFilter, percentFilter } 
//no hacmeos export default porque la idea es que estos filtros se puedan utilziar de manera atomica
