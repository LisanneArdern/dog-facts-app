import { Meta, Story } from '@storybook/react'
import Card from './Card'

export default {
  title: 'Card',
  component: Card,
} as Meta

interface CardProps {
  fact: string
}

const Template: Story<CardProps> = args => <Card {...args} />

export const DefaultCard: Story<CardProps> = Template.bind({})
DefaultCard.args = {
  fact: 'Dogs are cute',
}

export const LongCard: Story<CardProps> = Template.bind({})
LongCard.args = {
  fact: 'There are various breeds of dogs...... More text for a very, very, very, very, very, very, long fact about dogs.'
}