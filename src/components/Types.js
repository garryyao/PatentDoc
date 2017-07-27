import PropTypes from 'prop-types'
const Shape = PropTypes.shape
const String = PropTypes.string
const arrayOf = PropTypes.arrayOf
const Number = PropTypes.number
const TextNode = Shape({
  '#text': String,
  '_seq': Number
})
const Paragraph = Shape({
  'p': TextNode,
  '-lang': String,
  '_seq': Number
})

const Contact = Shape({
  '-sequence': String,
  '_seq': Number,
  'addressbook': Shape({
    '_seq': Number,
    'optionalAddress': {
      '_seq': Number,
      'country': TextNode
    },
    'optionalFirstName': TextNode,
    'optionalLastName': TextNode
  })
})

const PantentDoc = Shape({
  '-ucid': String,
  '-country': String,
  '-date': String,
  '-doc-number': String,
  '-kind': String,
  'abstract': PropTypes.object,
  'bibliographic-data': Shape({
    '_seq': Number,
    'parties': Shape({
      'agents': Shape({
        '_seq': Number,
        'agent': arrayOf(Contact)
      }),
      'applicants': Shape({
        '_seq': Number,
        'applicant': arrayOf(Contact)
      }),
      'assignees': Shape({
        '_seq': Number,
        'assignee': arrayOf(Contact)
      }),
      'examiners': Shape({
        '_seq': Number,
        'examiner': arrayOf(Contact)
      }),
      'inventors': Shape({
        '_seq': Number,
        'inventor': arrayOf(Contact)
      })
    })
  }),
  'claims': Shape({
    '_seq': Number,
    'claim': arrayOf(Shape({
      '-num': Number,
      '_seq': Number,
      'claim-text': TextNode
    })),
    'claim-statement': TextNode
  }),
  'abstract': Paragraph,
  'copyright': Shape({
    'claim': arrayOf(Shape({
      'claim-text': TextNode
    }))
  }),
  'description': Shape({
    '-lang': String,
    '_seq': Number,
    'heading': arrayOf(TextNode),
    'p': arrayOf(TextNode)
  })
})

export default PantentDoc