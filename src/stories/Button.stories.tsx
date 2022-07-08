import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react'

import { Button } from '../components/atoms'

export default {
  title: 'Compoonents/atoms/Button',
  component: Button,
  argTypes: {
    buttonTitle: {
      defaultValue: 'Button Title',
      control: {
        type: 'text',
      }
    },
    types: {
      defaultValue: 'primary',
      control: {
        options: [ 'primary', 'secondary', 'default' ],
        type: 'select',
      }
    }
  },
} as ComponentMeta<typeof Button>
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />

export const Primary = Template.bind({})