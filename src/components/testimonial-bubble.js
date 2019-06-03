import React from "react"

const TESTIMONIALSPATH = [
    {
      'quote': 'You are in good hands with Heather! She is an amazing healer and teacher.',
      'name': 'April Walker'
    },
    {
      'quote': 'Heather\'s ability to access her many gifts simultaneously is what makes her healings so powerful. She is a healer\'s healer.',
      'name': 'Shaun E. Herbst, Lizzie Moon, Many Blooms!'
    },
    {
      'quote': 'Heather Watson is a very talented healer. She is spot on and very present in her sessions.',
      'name': 'Donica Salazar'
    },
    {
      'quote': 'The best thing that I\'ve ever done for my body, mind and soul. I am not sure where I would be without Heather.',
      'name': 'Maggie May'
    },
    {
      'quote': 'Heather is such a gift to me and my children! She has cleared multiple allergies for my daughter and myself.',
      'name': 'Marisa, Sonora'
    },
    {
      'quote': 'From our first meeting, I knew I was about to experience a whole new perspective on health and wellness.',
      'name': 'Bob Lippert'
    },
    {
      'quote': '[Heather] has vast knowledge in many areas of healing and brings this purity and peace during the sessions.',
      'name': 'Nicole Ottman - Holistic Health Practioner & Transformational Therapist'
    },
    {
      'quote': 'Heather taught me techniques I still use today to protect my energy. I wholeheartedly recommend her to anyone who wants to improve their personal energy.',
      'name': 'Sabrena Rose'
    }
  ];

  class TestimonialBubble extends React.Component {
      constructor(props) {
          super(props);

          this.state = { currentQuote: 0};
          this.interval = null;
          this.nextQuote = this.nextQuote.bind(this);
      }

      nextQuote() {
          let current = this.state.currentQuote;
          let next = ++current % TESTIMONIALSPATH.length;
          this.setState({currentQuote: next});
      }

      componentDidMount() {
          this.interval = setInterval(this.nextQuote, 10000);
      }

      componentWillUnmount() {
          clearInterval(this.interval);
      }

      render() {
          let src = TESTIMONIALSPATH[this.state.currentQuote]
          return (
              <div>
                <p className="is-size-6">"{ src.quote}"</p>
                <p className="is-size-7 is-italic">{ src.name }</p>
              </div>
          )
      }
  }

  export default TestimonialBubble