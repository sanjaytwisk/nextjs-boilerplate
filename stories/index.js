import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import Counter from '../src/components/counter/Counter'

const add = action('added 1')
const remove = action('removed 1')

storiesOf('Counter', module).add('with initial count', () => (
  <Counter count={12} add={add} remove={remove} />
))
