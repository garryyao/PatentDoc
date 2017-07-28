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

export const NavItemsType = arrayOf(Shape({
  'target': String,
  'title': String
}))

export const ContactType = Shape({
  '-sequence': String,
  '_seq': Number,
  'addressbook': Shape({
    '_seq': Number,
    'optionalAddress': Shape({
      '_seq': Number,
      'country': TextNode
    }),
    'first-name': TextNode,
    'last-name': TextNode
  })
})
export const ClaimsType = Shape({
  '_seq': Number,
  'claim': arrayOf(Shape({
    '-num': String,
    '_seq': Number,
    'claim-text': TextNode
  })),
  'claim-statement': TextNode
})
export const DescType = Shape({
  '-lang': String,
  '_seq': Number,
  'heading': arrayOf(TextNode),
  'p': arrayOf(TextNode)
})
export const CopyrightType = TextNode
export const AbstractType = Paragraph
export const PatentBio = Shape({
  '_seq': Number,
  'parties': Shape({
    'agents': Shape({
      '_seq': Number,
      'agent': arrayOf(ContactType)
    }),
    'applicants': Shape({
      '_seq': Number,
      'applicant': arrayOf(ContactType)
    }),
    'assignees': Shape({
      '_seq': Number,
      'assignee': ContactType
    }),
    'examiners': Shape({
      '_seq': Number,
      'examiner': ContactType
    }),
    'inventors': Shape({
      '_seq': Number,
      'inventor': arrayOf(ContactType)
    })
  })
})
const PantentDocType = Shape({
  '-ucid': String,
  '-country': String,
  '-date': String,
  '-doc-number': String,
  '-kind': String,
  'abstract': PropTypes.object,
  'bibliographic-data': PatentBio,
  'claims': ClaimsType,
  'abstract': AbstractType,
  'copyright': CopyrightType,
  'description': DescType
})
export default PantentDocType