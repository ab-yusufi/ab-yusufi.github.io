let formHeader = document.getElementById("formHeader")
let form = document.getElementById("form")
let start = document.getElementById("start")
let header = document.getElementById("header")
let addParagraph = document.getElementById("addParagraph") //ADD Para
let addPara = document.getElementById("addPara") //ADD Field
let addText = document.getElementById("addText") //ADD Field
let addRadioButton = document.getElementById('addRadioButton')
let addRadio = document.getElementById('addRadio')
let addCheckbox = document.getElementById('addCheckbox')
let addCheck = document.getElementById('addCheck')
let addButton = document.getElementById("addButton")
let backButton = document.getElementById("backButton")
let addSubmitButton = document.getElementById('addSubmitButton')
let addSubmit = document.getElementById('addSubmit')
let body = document.querySelector('body')
let divStart = document.getElementById('divStart')

//style
let changeBack = document.querySelector('#changeBack')
let changeText = document.querySelector('#changeText')
let finish = document.querySelector('#finish')

let paraClicked = false
let textClicked = false
let radioClicked = false
let checkClicked = false
let submitClicked = false
let countRadio = 0
let countSubmit = 0

changeBack.style.display = 'none'
changeText.style.display = 'none'
finish.style.display = 'none'

addButton.style.display = 'none'
backButton.style.display = 'none'
addText.style.display = "none"
addParagraph.style.display = "none"
addPara.style.display = "none"
addRadioButton.style.display = "none"
addRadio.style.display = "none"
addCheckbox.style.display = "none"
addCheck.style.display = "none"
addSubmitButton.style.display = 'none'
addSubmit.style.display = 'none'
formHeader.style.display = 'block'

 $(document).ready(function(){
     $("#exampleModal").modal('show');
     $('#gotit').click(function(){
     $(formHeader).focus();
     })
     });


start.addEventListener('click', () => {
  if(formHeader.value == ''){
    alert("Please Enter a Value")
    formHeader.focus()
  } else {
    header.innerHTML = formHeader.value
    header.setAttribute('style', "font-family: 'Zilla Slab', serif")
    header.setAttribute('contenteditable', 'true')

    formHeader.style.display = "none"
    start.style.display = "none"
    addText.style.display = "block"
    addRadioButton.style.display = "inline"
    addCheckbox.style.display = "inline"
    addSubmitButton.style.display = "inline"
    divStart.style.display = "none"
    addParagraph.style.display = "block"
  }
})



//BACK Function

function back(){
  let enterTitle = document.getElementsByClassName('enterTitle')
  let enterParaTitle = document.getElementsByClassName('enterParaTitle')
  let enterRadioTitle = document.getElementsByClassName('enterRadioTitle')
  let enterRadioName = document.getElementsByClassName('enterRadioName')
  let enterCheckTitle = document.getElementsByClassName('enterCheckTitle')
  let enterSubmitTitle = document.getElementsByClassName('enterSubmitTitle')
  let radioTitleValue = document.getElementById('radioTitleValue')
  let checkTitleValue = document.getElementById('checkTitleValue')
  let radSpan = document.getElementsByClassName('radSpan')

  addParagraph.style.display = "block"
  addText.style.display = "block"
  addRadioButton.style.display = "block"
  addCheckbox.style.display = "block"
  addSubmitButton.style.display = 'block'

  backButton.style.display = 'none'
  addRadio.style.display = "none"
  addButton.style.display = "none"
  addCheck.style.display = "none"
  addPara.style.display = "none"
  addSubmit.style.display = 'none'
  if(paraClicked){
    enterParaTitle[0].style.display = 'none'
    enterParaTitle[0].removeAttribute('class')
  }

  if(radioClicked){
    radSpan[0].style.display = 'none'
    radSpan[0].removeAttribute('class')
    countRadio++
  }

  if(checkClicked){
    enterCheckTitle[0].style.display = 'none'
    enterCheckTitle[0].removeAttribute('class')
  }

  if(textClicked){
    enterTitle[0].style.display = 'none'
    enterTitle[0].removeAttribute('class')
  }

  if(submitClicked){
    enterSubmitTitle[0].style.display = 'none'
    enterSubmitTitle[0].removeAttribute('class')
  }
  textClicked = false
  radioClicked = false
  checkClicked = false
  paraClicked = false
  submitClicked = false
}

//Function to add text field

addText.addEventListener('click', () => {
  let title = document.createElement('input')  //enter title here

  title.setAttribute('class', 'enterTitle d-block mx-auto my-3 text-center')
  title.setAttribute('placeholder', 'Enter Title of Field')
  title.setAttribute('style', 'color: #fff; background-color: #2C3335; border: 1px solid #fff; border-radius: 10px')


  body.insertBefore(title, form)


  addButton.style.display = 'inline-block'
  backButton.style.display = 'block'

  addParagraph.style.display = 'none'
  addText.style.display = "none"
  addRadioButton.style.display = "none"
  addCheckbox.style.display = "none"
  addSubmitButton.style.display = 'none'

  textClicked = true
  title.focus()
})

function add_text(){
  let titleText = document.createElement('p')
  let fieldInput = document.createElement('input')
  let enterTitle = document.getElementsByClassName('enterTitle')

  if(enterTitle[0].value == ''){
    alert('Please Enter a Value!')
  } else {
    titleText.innerHTML = enterTitle[0].value

    titleText.setAttribute('class', 'text-center mt-2 textField')
    titleText.setAttribute('contenteditable', 'true')
    fieldInput.style.display = "block"
    fieldInput.setAttribute('class', 'mx-auto')

    form.appendChild(titleText)
    form.appendChild(fieldInput)

    enterTitle[0].style.display = 'none'
    enterTitle[0].removeAttribute('class')
    addButton.style.display = 'none'
    backButton.style.display = 'none'

    addParagraph.style.display = 'block'
    addText.style.display = "block"
    addRadioButton.style.display = "block"
    addCheckbox.style.display = "block"
    addSubmitButton.style.display = 'block'

    textClicked = false
  }
}

//Function to add radio button field
function add_radio_button(){
  let radioTitle = document.createElement('input')
  let radioName = document.createElement('input')
  let radioValuesSpan = document.createElement('span')

  radioTitle.setAttribute('placeholder', 'Enter Button Label')
  // radioTitle.setAttribute('id', 'radioTitleValue')
  radioTitle.setAttribute('class', 'enterRadioTitle text-center')
  radioTitle.setAttribute('style', 'color: #fff; background-color: #2C3335; border: 1px solid #fff; border-radius: 10px')
  radioName.setAttribute('placeholder', 'Enter Value')
  radioName.setAttribute('class', 'enterRadioName text-center')
  radioName.setAttribute('style', 'color: #fff; background-color: #2C3335; border: 1px solid #fff; border-radius: 10px')
  radioValuesSpan.setAttribute('class', 'radSpan d-flex flex-wrap justify-content-center my-3')

  radioValuesSpan.appendChild(radioTitle)
  radioValuesSpan.appendChild(radioName)
  body.insertBefore(radioValuesSpan, form)
  radioTitle.focus()

  addRadio.style.display = 'inline-block'
  backButton.style.display = 'block'

  addParagraph.style.display = 'none'
  addText.style.display = "none"
  addRadioButton.style.display = "none"
  addCheckbox.style.display = "none"
  addSubmitButton.style.display = 'none'

  radioClicked = true
}

let radioDivCount = 0
function add_radio(){
  let radioButton = document.createElement('input')
  let radioValue = document.createElement('label')
  let radioDiv = document.createElement('div')
  let radioSpan = document.createElement('span')
  // let radioTitleValue = document.getElementById('radioTitleValue')
  let enterRadioTitle = document.getElementsByClassName('enterRadioTitle')
  let enterRadioName = document.getElementsByClassName('enterRadioName')
  let radSpan = document.getElementsByClassName('radSpan')

  if(enterRadioName[countRadio].value == '' || enterRadioTitle[countRadio].value == ''){
    alert('Please Enter a Value!')
    enterRadioTitle[countRadio].focus()
  } else {
    radioDiv.setAttribute('class', 'divRadio d-flex flex-wrap justify-content-center')
    radioButton.setAttribute('type', 'radio')
    radioButton.setAttribute('name', enterRadioName[countRadio].value)
    radioButton.setAttribute('class', 'mx-1')
    radioSpan.setAttribute('class', 'mx-3')
    radioValue.setAttribute('class', 'raDio')
    radioValue.setAttribute('contenteditable', 'true')

    radioValue.innerHTML = enterRadioTitle[countRadio].value


    if(radioDivCount == 0){
      radioSpan.appendChild(radioButton)
      radioSpan.appendChild(radioValue)
      radioDiv.appendChild(radioSpan)
      form.appendChild(radioDiv)
      radioDivCount++
    } else if(enterRadioName[countRadio].value == enterRadioName[countRadio - 1].value){
      let divRadio = document.getElementsByClassName('divRadio')
      radioSpan.appendChild(radioButton)
      radioSpan.appendChild(radioValue)
      divRadio[radioDivCount - 1].appendChild(radioSpan)
      form.appendChild(divRadio[radioDivCount - 1])
    } else {
      radioDivCount++
      radioSpan.appendChild(radioButton)
      radioSpan.appendChild(radioValue)
      radioDiv.appendChild(radioSpan)
      form.appendChild(radioDiv)
    }


    addParagraph.style.display = 'inline'
    addText.style.display = 'inline'
    addRadioButton.style.display = 'inline'
    addCheckbox.style.display = 'inline'
    addSubmitButton.style.display = 'inline'

    backButton.style.display = 'none'
    addRadio.style.display = 'none'
    enterRadioName[countRadio].style.display = 'none'
    enterRadioTitle[countRadio].style.display = 'none'

    radSpan[0].style.display = 'none'
    radSpan[0].removeAttribute('class')
    radioClicked = false

    countRadio++
  }

}

//Function to add checkbox
function add_checkbox(){
  let checkTitle = document.createElement('input')

  checkTitle.setAttribute('placeholder', 'Enter Checkbox Label')
  checkTitle.setAttribute('id', 'checkTitleValue')
  checkTitle.setAttribute('class', 'enterCheckTitle d-block mx-auto my-3 text-center')
  checkTitle.setAttribute('style', 'color: #fff; background-color: #2C3335; border: 1px solid #fff; border-radius: 10px')

  body.insertBefore(checkTitle, form)
  checkTitle.focus()

  addParagraph.style.display = 'none'
  addRadio.style.display = 'none'
  addText.style.display = "none"
  addRadioButton.style.display = "none"
  addCheckbox.style.display = "none"
  addSubmitButton.style.display = 'none'

  backButton.style.display = 'block'
  addCheck.style.display = 'block'

  checkClicked = true
}

function add_check(){
  let checkbox = document.createElement('input')
  let checkValue = document.createElement('label')
  let checkDiv = document.createElement('div')
  let checkDiv1 = document.createElement('div')
  let checkTitleValue = document.getElementById('checkTitleValue')
  let enterCheckTitle = document.getElementsByClassName('enterCheckTitle')

  if(enterCheckTitle[0].value == ''){
    alert('Please Enter a Value!')
    enterCheckTitle[0].focus()
  } else {
    checkbox.setAttribute('type', 'checkbox')
    checkDiv1.setAttribute('class', 'd-flex flex-wrap justify-content-center mt-3')
    checkValue.setAttribute('class', 'mx-1 cheCK')
    checkValue.setAttribute('contenteditable', 'true')

    checkValue.innerHTML = enterCheckTitle[0].value

    checkDiv.appendChild(checkbox)
    checkDiv.appendChild(checkValue)
    checkDiv1.appendChild(checkDiv)
    form.appendChild(checkDiv1)

    addParagraph.style.display = 'block'
    addText.style.display = 'block'
    addRadioButton.style.display = 'block'
    addCheckbox.style.display = 'block'
    addSubmitButton.style.display = 'block'

    backButton.style.display = 'none'
    addCheck.style.display = 'none'

    enterCheckTitle[0].style.display = 'none'
    enterCheckTitle[0].removeAttribute('class')

    checkClicked = false
  }
}

function add_paragraph(){
  let paraTitle = document.createElement('input')

  paraTitle.setAttribute('class', 'enterParaTitle d-block mx-auto my-3 text-center')
  paraTitle.setAttribute('placeholder', 'Enter Title Text')
  paraTitle.setAttribute('style', 'color: #fff; background-color: #2C3335; border: 1px solid #fff; border-radius: 10px')

  body.insertBefore(paraTitle, form)
  paraTitle.focus()

  addParagraph.style.display = 'none'
  addText.style.display = "none"
  addRadioButton.style.display = "none"
  addCheckbox.style.display = "none"
  addSubmitButton.style.display = 'none'


  addPara.style.display = 'inline'
  backButton.style.display = 'inline'

  paraClicked = true
}

function add_para(){
  let paraText = document.createElement('p')
  let enterParaTitle = document.getElementsByClassName('enterParaTitle')

  //Para label
  if(enterParaTitle[0].value == ''){
    alert('Please Enter a Value!')
    enterParaTitle[0].focus()
  } else {
    paraText.innerHTML = enterParaTitle[0].value
    paraText.setAttribute('class', 'text-center paraGraph mt-3')
    paraText.setAttribute('contenteditable', 'true')



    form.appendChild(paraText)

    addPara.style.display = 'none'
    backButton.style.display = 'none'

    enterParaTitle[0].style.display = 'none'
    enterParaTitle[0].removeAttribute('class')


    addParagraph.style.display = 'block'
    addText.style.display = 'block'
    addRadioButton.style.display = 'block'
    addCheckbox.style.display = 'block'
    addSubmitButton.style.display = 'block'

    paraClicked = false
  }
}

function add_submit_button(){
  let submitTitle = document.createElement('input')

  submitTitle.setAttribute('placeholder', 'Enter Submit Value')
  submitTitle.setAttribute('class', 'enterSubmitTitle d-block mx-auto mt-3 text-center')
  submitTitle.setAttribute('style', 'color: #fff; background-color: #2C3335; border: 1px solid #fff; border-radius: 10px')

  body.insertBefore(submitTitle, form)
  submitTitle.focus()

  addParagraph.style.display = 'none'
  addText.style.display = "none"
  addRadioButton.style.display = "none"
  addCheckbox.style.display = "none"
  addSubmitButton.style.display = 'none'

  addSubmit.style.display = 'inline'
  backButton.style.display = 'inline'

  submitClicked = true
}

function add_submit(){
  let paraGraph = document.getElementsByClassName('paraGraph')
  let raDio = document.getElementsByClassName('raDio')
  let cheCK = document.getElementsByClassName('cheCK')
  let textField = document.getElementsByClassName('textField')

  let enterSubmitTitle = document.getElementsByClassName('enterSubmitTitle')
  let submitButton = document.createElement('button')

  if(enterSubmitTitle[0].value == ''){
    alert('Please Enter a Value!')
    enterSubmitTitle[0].focus()
  } else {
    submitButton.innerHTML = enterSubmitTitle[0].value
    submitButton.style.display = 'block'

    submitButton.setAttribute('class', 'mx-auto btn btn-primary mt-3')
    body.appendChild(submitButton)

    enterSubmitTitle[0].style.display = 'none'
    enterSubmitTitle[0].removeAttribute('class')

    backButton.style.display = 'none'
    addSubmit.style.display = 'none'


    for(x in paraGraph){
      paraGraph[x].contentEditable = 'false'
    }

    for(x in raDio){
      raDio[x].contentEditable = 'false'
    }

    for(x in cheCK){
      cheCK[x].contentEditable = 'false'
    }

    for(x in textField){
      textField[x].contentEditable = 'false'
    }

    header.setAttribute('contenteditable', 'false')

    changeBack.style.display = 'block'
    changeText.style.display = 'block'
    finish.style.display = 'block'
  }

}

let i = 0
function change_back(){
  let colors = [
    'background: linear-gradient(to right, #fc00ff, #00dbde);',
    'background: linear-gradient(to right, #00bf8f, #001510);',
    'background: linear-gradient(to right, #0f0c29, #302b63, #24243e);',
    'background: linear-gradient(to right, #642b73, #c6426e); ',
    'background: linear-gradient(to right, #3494e6, #ec6ead);',
    'background: linear-gradient(to right, #215f00, #e4e4d9);',
    'background: linear-gradient(to right, #16222a, #3a6073);',
    'background: linear-gradient(to right, #e0eafc, #cfdef3);',
    'background: linear-gradient(to right, #000000, #434343);',
    'background: linear-gradient(to right, #616161, #9bc5c3);',
    'background: linear-gradient(to right, #536976, #292e49);',
    'background: linear-gradient(to right, #005c97, #363795);',
    'background: linear-gradient(to right, #141e30, #243b55);',

  ]

  while(i<=colors.length){
  // body.setAttribute('style', colors[Math.floor(Math.random() * colors.length)])
    if(i == 13){
      i = 0
      body.setAttribute('style', colors[i])
      i++
      break
    }
    body.setAttribute('style', colors[i])
    i++
    if(true){break}
}
}

let j = 0
function change_text(){
  if(j == 0){
    body.setAttribute('class', 'text-dark')
    j = 1
  } else {
  body.setAttribute('class', 'text-white')
  j = 0
}
}

let k = 0
function done(){
  if(k == 0){
    alert("Make Sure You Are Done With The Form. Press Again to Finish")
    k = 1
  } else {
    changeBack.style.display = 'none'
    changeText.style.display = 'none'
    finish.style.display = 'none'
    alert('Upvote if you liked it and follow for more. Do check out my other codes too')
  }

}
