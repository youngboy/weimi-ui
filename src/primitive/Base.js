import PropTypes from 'prop-types'
import styled from 'styled-components'
import { styles } from 'styled-system'

import { cleanTag, cloneType } from '../utils'

const css = props => props.css

const Base = styled(cleanTag('div'))(
  css
)

// FIXME: Not used for now, it is slower than base
// import Tag from './Tag'
// const BaseForwardRef = styled(Tag.div)(
//   css
// )

export const AllStyle = styled(Base)(
  ...Object.keys(styles).map(s => styles[s])
)

Base.propTypes = {
  css: cloneType(PropTypes.string, {
    prop: 'css',
    displayName: 'Base',
    themeKey: null,
  })
}

Base.displayName = 'Base'

export default Base

