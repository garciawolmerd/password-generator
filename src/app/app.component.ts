import { Component } from '@angular/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  password = ''
  length = 0
  includeLetters = false
  includeNumbers = false
  includeSymbols = false

  onInputLength (value: string) {
    const parsedValue = parseInt(value, 10)
    if (!isNaN(parsedValue)) {
      this.length = parsedValue
    }
  }

  onButtonClick () {
    const numbers = '0123456789'
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    const symbols = '!@#$%^&*()?'
    let validChars = ''

    if (this.includeLetters) {
      validChars += letters
    }
    if (this.includeNumbers) {
      validChars += numbers
    }
    if (this.includeSymbols) {
      validChars += symbols
    }
    
    let generatedPassword = ''
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(
        Math.random() * validChars.length
      )
      generatedPassword += validChars[index]
    }

    this.password = generatedPassword
  }

  onChangeUseLetters () {
    this.includeLetters = !this.includeLetters
  }

  onChangeUseNumbers () {
    this.includeNumbers = !this.includeNumbers
  }

  onChangeUseSymbols () {
    this.includeSymbols = !this.includeSymbols
  }

  disableButton () {
    return (
      !(
        (this.length && this.length >= 8) && 
        (this.includeLetters || this.includeNumbers || this.includeSymbols)
      )
    )
  }
}
