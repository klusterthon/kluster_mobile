import LottieView from 'lottie-react-native';
import Notify from './notify';
import * as SecureStore from 'expo-secure-store';
const base_url = 'https://fractionapi.herokuapp.com/api/';

const numberWithCommas = x => {
  var number = Number(x);
  if (Number(number) < 0 || !number) {
    return '0.00';
  }
  return number
    .toFixed(2)
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ',');
};

const ValidatePhone = inputText => {
  return inputText.length >= 8 && inputText.length <= 14;
};

const formatDate = date => {
  var newdate = new Date(date);
  var newDate =
    newdate.getFullYear() +
    '-' +
    (newdate.getMonth() + 1) +
    '-' +
    newdate.getDate() +
    '  ' +
    newdate.getHours() +
    ':' +
    newdate.getMinutes();
  return newDate;
};

const formatDateString = (date, type) => {
  if (type == 'time') {
    var newdate = new Date(date);
    const hours = newdate.getHours();
    const minutes = newdate.getMinutes();
    const timeFormat = hours >= 12 ? 'PM' : 'AM';
    const twelveHourFormat = hours % 12 || 12;
    const formattedTime = `${twelveHourFormat}:${minutes
      .toString()
      .padStart(2, '0')} ${timeFormat}`;
    return formattedTime;
  }
  var newdate = new Date(date).toDateString();
  return newdate;
};

const type = obj => {
  return Object.prototype.toString
    .apply(obj)
    .replace(/\[object (.+)\]/i, '$1')
    .toLowerCase();
};

const getRandomBgColors = () => {
  const all_color = [
    '#FCF1CE',
    '#FCF1CE',
    '#D5E2F6',
    '#FCF1CE',
    '#FFD0CF',
    '#D5E2F6',
    '#FECEEF',
    '#D5E2F6',
    '#D2F4E4',
  ];
  return all_color[Math.floor(Math.random() * all_color.length)];
};

const typeOfVar = (str, strType) => {
  var letters = /^[A-Za-z]+$/;
  if (!str.match(letters)) {
    return false;
  }
  return true;
};

const getPercentage = (currentAmount, EstimatedAmount) => {
  var totalPercentage = Math.round(
    (Number(currentAmount) / Number(EstimatedAmount)) * 100,
  );
  totalPercentage = totalPercentage > 100 ? 100 : totalPercentage;
  return totalPercentage;
};

const ValidateEmail = inputText => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inputText);
};

const checkString = (string, checkFor, minLen = 6) => {
  if (checkFor == 'length') {
    if (string.length >= minLen) {
      return true;
    }
  }
  if (checkFor == 'lowercase') {
    return /[a-z]/.test(string);
  }
  if (checkFor == 'uppercase') {
    return /[A-Z]/.test(string);
  }
  if (checkFor == 'special') {
    return /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(string);
  }
  return false;
};

const trimLength = (text, leng = 14) => {
  if (!text) {
    return text;
  }
  const wordsArray = text.split(' ');
  const filteredArray = wordsArray.filter(word => word.trim() !== '');
  var trimmedString = filteredArray.join(' ');
  var trimmedString = trimmedString.replace(/\s+/g, ' ').trim();
  var txt = trimmedString;
  var len = txt.length;
  if (len > leng) {
    var trimmed = txt.trim().substring(0, leng);
    return trimmed + '...';
  } else {
    return txt;
  }
};

export {
  base_url,
  typeOfVar,
  ValidatePhone,
  numberWithCommas,
  formatDate,
  ValidateEmail,
  LottieView,
  Notify,
  SecureStore,
  getRandomBgColors,
  getPercentage,
  checkString,
  formatDateString,
  trimLength,
};
