module.exports = function toReadable (number) {
    const arr = ['zero','one','two','three','four','five','six','seven','eight','nine','ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const arr2 = ['0', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    if (number<20) 
    return arr[number];
    if (number >= 20 && number<100 &&(number%10===0))
    return arr2[Math.floor(number/10)]
    if (number >=20 && number<100)
    return arr2[Math.floor(number/10)] + ' ' + arr[Math.floor(number%10)]
    if (number>=100 && number%100===0)
    return arr[Math.floor(number/100)] + ' hundred' 
    if (number>100 && number<1000 &&(number%100<10))
    return arr[Math.floor(number/100)] + ' hundred ' + arr[number%100]
    if (number>100 && number<1000 && (number%100>=10) && (number%100<20))
    return arr[Math.floor(number/100)] + ' hundred ' + arr[Math.floor(number%100)]
    if (number>100 && number<1000 && (number%100>=20) &&(number%10===0)) 
        return arr[Math.floor(number/100)] + ' hundred ' + arr2[((number%100)/10)] 
    if (number>100 && number<1000 && (number%100>=20) && (number%10>0))
    return arr[Math.floor(number/100)] + ' hundred ' + arr2[Math.floor(number%100/10)] + ' ' + arr[number%10]
}
