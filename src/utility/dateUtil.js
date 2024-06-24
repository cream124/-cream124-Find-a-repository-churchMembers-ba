const dayjs = require('dayjs');
const customParseFormat = require('dayjs/plugin/customParseFormat')
const format = 'YYYY-MM-DDTHH:mm:ss';

const getDateInFormat = async (date, hour, minute) => {
    return `${date}T${hour}:${minute}:00`;
};

const getDateInFormatFromTimeStamp = async ( timeStamp) => {
    return dayjs.unix(timeStamp).format(format);;
};

const getDateInTimestamp = async (dateInFormat) => {
    const da = dayjs(dateInFormat, format);
    return da.unix();
};

const getDateAddMinites =  (date, hour, minute, addMinutes) => {
    const dateInFormat = `${date}T${hour}:${minute}:00`;
    dayjs.extend(customParseFormat);
    let da = dayjs(dateInFormat, format);
    da = da.add(addMinutes, 'minute');
    console.log('*d1***', da.format('HH:mm'));
    return da.unix();
};

/**
 * 
 * @param  birthDate  in ISO format as "2024-05-02T04:00:00.000Z"
 * @returns Age in Int format
 */
const getAge =  async (birthDate) => {
    const age = parseInt(dayjs().diff(dayjs(birthDate), 'year'));
    return age;
};

module.exports = {
    getDateInFormat,
    getDateInTimestamp,
    getDateInFormatFromTimeStamp,
    getDateAddMinites,
    getAge
};
