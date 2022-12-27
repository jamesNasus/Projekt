const documentNumber = document.querySelector('#document-number')
const documentType = document.querySelector('#document-type')
const documentName = document.querySelector('#document-name')
const documentDate = document.querySelector('#document-date')

const popupBackground = document.querySelector('.add-new-doc-popup-background')
const popup = document.querySelector('.add-new-doc-popup')
const table = document.querySelector('.table-elements')

const delBtn = document.querySelector('.del-btn')
const addNewDoc = document.querySelector('.add-new-doc')
const popupAddBtn = document.querySelector('.popup-add-doc-btn')
const closePopupBtn = document.querySelector('.close-popup-btn')



const openPopup = () => {
   popupBackground.classList.add('show-popup')
   popup.classList.add('show-popup')
   let today = new Date().toISOString().slice(0, 10)
   documentDate.value = today
}

const closePopup = () => {
   popupBackground.classList.remove('show-popup')
   popup.classList.remove('show-popup')
}

$(document).on('click','.del-btn',function(){
   this.closest('tr').remove()
});

const addDocument = () => {
   $('<tr><td><i class="bi bi-circle-fill status-color-in"></i><span class="status-text">Realizacja...</span></td><td>'+ documentNumber.value +
   '</td><td>'+ documentType.value +'</td><td>'+ documentName.value +'</td><td>'+ documentDate.value +
   '</td><td>-</td><td class="td-btns"><button class="check-btn" style="margin-right: 6px;"><i class="bi bi-check-lg"></i></button><a href="./lorem-ipsum.pdf" download="lorem-ipsum.pdf"><button><i class="bi bi-download"></i></button></a><a href="faktura.html"><button style="margin: 0 6px;"><i class="bi bi-eye"></i></button></a><button class="del-btn"><i class="bi bi-trash"></i></button></td></tr>').appendTo(table)
   popupBackground.classList.remove('show-popup')
   popup.classList.remove('show-popup')

   documentNumber.value = ''
   documentName.value = ''
   documentType.value = ''
}

$(document).on('click','.check-btn',function(){
   const thisRow = this.closest('tr')
   const allTd = thisRow.getElementsByTagName('td')
   let today = new Date().toISOString().slice(0, 10)
   allTd[0].innerHTML = '<i class="bi bi-circle-fill status-color"></i> <span class="status-text">Zrealizowane</span>'
   allTd[5].textContent = today
   const buttonTd = allTd[6].querySelector('.check-btn')
   buttonTd.classList.add('active')
});

const ds = document.getElementsByClassName

addNewDoc.addEventListener('click', openPopup)
closePopupBtn.addEventListener('click', closePopup)
popupAddBtn.addEventListener('click', addDocument)

