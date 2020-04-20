const data = [
 
    {source: { uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(11).jpeg" },resizeMode:"contain",id: idGenerator(),},
    {source: { uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(12).jpeg" },resizeMode:"contain",id: idGenerator(),},
    {source: { uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(13).jpeg" },resizeMode:"contain",id: idGenerator(),},
    {source: { uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(14).jpeg" },resizeMode:"contain",id: idGenerator(),},
    {source: { uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(15).jpeg" },resizeMode:"contain",id: idGenerator(),},
    {source: { uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(16).jpeg" },resizeMode:"contain",id: idGenerator(),},
    {source: { uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(17).jpeg" },resizeMode:"contain",id: idGenerator(),},
    {source: { uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(18).jpeg" },resizeMode:"contain",id: idGenerator(),},
    {source: { uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(19).jpeg" },resizeMode:"contain",id: idGenerator(),},
    {source: { uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(21).jpeg" },resizeMode:"contain",id: idGenerator(),},
    {source: { uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(22).jpeg" },resizeMode:"contain",id: idGenerator(),},
    {source: { uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(23).jpeg" },resizeMode:"contain",id: idGenerator(),},
    {source: { uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(24).jpeg" },resizeMode:"contain",id: idGenerator(),},
    {source: { uri: "http://siteotomasyonu.com/musadukelapi/musteri/1%20(25).jpeg" },resizeMode:"contain",id: idGenerator(),},
    
	




 
];

function idGenerator() {
    return Math.random().toString(36).substr(2, 9);
}

module.exports = data;