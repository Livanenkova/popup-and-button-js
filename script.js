//  [
//    {key: 'kruchenih', value: 'this is about c'},
//   {key: 'mayakovskii', value: 'this is about m'},
//   {key: 'burluk', value: 'this is about b'},
//   {key: 'arina', value: 'this is about ARINA!!!!111'}
// ].forEach(({key, value}) => this[key].onclick = () => {
//   this.wrapper.style.display = 'flex';
//   document.getElementById('content').innerHTML = value;
//  })

//  this.closePopup.onclick = () => {
//    this.wrapper.style.display = 'none';
//  }

var kruchenihButton = document.getElementById('kruchenih');
var mayakovskiiButton = document.getElementById('mayakovskii');
var burlukButton = document.getElementById('burluk');
var arinaButton = document.getElementById('arina');
var popupWrapper = document.getElementById('wrapper');
var popupContent = document.getElementById('content');
var closePopupButton = document.getElementById('closePopup');

kruchenihButton.onclick = openKruchenihPopup;
mayakovskiiButton.onclick = openMayakovskiiPopup;
burlukButton.onclick = openBurlukPopup;
arinaButton.onclick = openArinaPopup;
closePopupButton.onclick = closePopup;

function openKruchenihPopup() {
  popupWrapper.style.display = 'flex';
  popupContent.innerHTML = 'крученых крут';
};

function openMayakovskiiPopup () {
  popupWrapper.style.display = 'flex';
  popupContent.innerHTML = 'Маяк Молодец';
};

function openBurlukPopup() {
  popupWrapper.style.display = 'flex';
  popupContent.innerHTML = 'Бурлюк бодрый';
};

function openArinaPopup() {
  popupWrapper.style.display = 'flex';
  popupContent.innerHTML = 'Арина Арина Арина';
};

function closePopup() {
  popupWrapper.style.display = 'none';
};