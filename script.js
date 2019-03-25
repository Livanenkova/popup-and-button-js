// [
//   {key: 'kruchenih', value: 'this is about c'},
//   {key: 'm', value: 'this is about m'},
//   {key: 'b', value: 'this is about b'},
//   {key: 'a', value: 'this is about ARINA!!!!111'}
// ].forEach(({key, value}) => this[key].onclick = () => {
//   this.wrapper.style.display = 'flex';
//   document.getElementById('content').innerHTML = value;
// })

// this.closePopup.onclick = () => {
//   this.wrapper.style.display = 'none';
// }

var kruchenihButton = document.getElementById('kruchenih');
var popupWrapper = document.getElementById('wrapper');
var popupContent = document.getElementById('content');
var closePopupButton = document.getElementById('closePopup');

function openKruchenihPopup() {
  popupWrapper.style.display = 'flex';
  popupContent.innerHTML = 'крученых крут';
};

function closePopup() {
  popupWrapper.style.display = 'none';
};

kruchenihButton.onclick = openKruchenihPopup;
closePopupButton.onclick = closePopup;

var mayakovskiiButton = document.getElementById('mayakovskii');
var popupWrapper = document.getElementById('wrapper');
var popupContent = document.getElementById('content');
var closePopupButton = document.getElementById('closePopup');

function openMayakovskiiPopup() {
  popupWrapper.style.display = 'flex';
  popupContent.innerHTML = 'Маяк Молодец';
};

function closePopup() {
  popupWrapper.style.display = 'none';
};

mayakovskiiButton.onclick = openMayakovskiiPopup;
closePopupButton.onclick = closePopup;

var burlukButton = document.getElementById('burluk');
var popupWrapper = document.getElementById('wrapper');
var popupContent = document.getElementById('content');
var closePopupButton = document.getElementById('closePopup');

function openBurlukPopup() {
  popupWrapper.style.display = 'flex';
  popupContent.innerHTML = 'Бурлюк бодрый';
};

function closePopup() {
  popupWrapper.style.display = 'none';
};

burlukButton.onclick = openBurlukPopup;
closePopupButton.onclick = closePopup;

var arinaButton = document.getElementById('arina');
var popupWrapper = document.getElementById('wrapper');
var popupContent = document.getElementById('content');
var closePopupButton = document.getElementById('closePopup');

function openArinaPopup() {
  popupWrapper.style.display = 'flex';
  popupContent.innerHTML = 'Арина Арина Арина';
};

function closePopup() {
  popupWrapper.style.display = 'none';
};

arinaButton.onclick = openArinaPopup;
closePopupButton.onclick = closePopup;

