import {Component} from 'react'

import FaqItem from '../FaqItem'

import './index.css'

class Faqs extends Component {
  render() {
    const {faqsList} = this.props
    return (
      <div className="app-container">
        <ul className="faqs-container">
          <h1 className="heading">FAQs</h1>
          {faqsList.map(eachFaq => (
            <FaqItem
              faqDetails={eachFaq}
              key={eachFaq.id}
              toggleAnswer={this.toggleAnswer}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default Faqs
