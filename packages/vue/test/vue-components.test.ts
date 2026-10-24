import { mount } from '@vue/test-utils'
import { describe, expect, it } from 'vitest'
import {
  Badge,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  Fab,
  Icon,
  IconButton,
  LinearProgress,
  LoadingIndicator,
  Radio,
  Slider,
  SplitButton,
  Switch,
  TextField,
  vRipple,
} from '../src/index'

describe('@m3-expressive/vue components', () => {
  it('renders Button with variants and sizes', async () => {
    const wrapper = mount(Button, {
      props: {
        variant: 'tonal',
        size: 'lg',
        shape: 'square',
      },
      slots: {
        default: 'Save Changes',
      },
    })

    expect(wrapper.classes()).toContain('m3-button')
    expect(wrapper.attributes('data-variant')).toBe('tonal')
    expect(wrapper.attributes('data-size')).toBe('lg')
    expect(wrapper.attributes('data-shape')).toBe('square')
    expect(wrapper.text()).toContain('Save Changes')

    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toHaveLength(1)
  })

  it('renders Button loading state', () => {
    const wrapper = mount(Button, {
      props: {
        loading: true,
      },
      slots: {
        default: 'Submitting',
      },
    })

    expect(wrapper.attributes('aria-busy')).toBe('true')
    expect(wrapper.find('.m3-loading-indicator').exists()).toBe(true)
  })

  it('renders IconButton with toggle state', async () => {
    const wrapper = mount(IconButton, {
      props: {
        icon: 'favorite',
        label: 'Like',
        toggle: true,
        selected: false,
      },
    })

    expect(wrapper.classes()).toContain('m3-icon-button')
    expect(wrapper.attributes('aria-label')).toBe('Like')
    expect(wrapper.attributes('data-toggle')).toBe('')

    await wrapper.trigger('click')
    expect(wrapper.emitted('click')).toHaveLength(1)
    expect(wrapper.emitted('update:selected')?.[0]).toEqual([true])
  })

  it('renders ButtonGroup with single selection', () => {
    const wrapper = mount(ButtonGroup, {
      props: {
        variant: 'connected',
        selection: 'single',
        modelValue: 'bold',
      },
      slots: {
        default: `
          <button data-value="bold">Bold</button>
          <button data-value="italic">Italic</button>
        `,
      },
    })

    expect(wrapper.classes()).toContain('m3-button-group')
    expect(wrapper.attributes('data-variant')).toBe('connected')
  })

  it('renders SplitButton and responds to clicks', async () => {
    const wrapper = mount(SplitButton, {
      props: {
        label: 'Send',
        icon: 'send',
        menuLabel: 'More options',
      },
    })

    expect(wrapper.classes()).toContain('m3-split-button')
    const leading = wrapper.find('.m3-split-button__leading')
    await leading.trigger('click')
    expect(wrapper.emitted('click')).toHaveLength(1)

    const trailing = wrapper.find('.m3-split-button__trailing')
    await trailing.trigger('click')
    expect(wrapper.emitted('menu-click')).toHaveLength(1)
  })

  it('renders Fab button', () => {
    const wrapper = mount(Fab, {
      props: {
        icon: 'add',
        label: 'Create',
        extended: true,
        color: 'secondary',
      },
    })

    expect(wrapper.classes()).toContain('m3-fab')
    expect(wrapper.attributes('data-extended')).toBe('')
    expect(wrapper.attributes('data-color')).toBe('secondary')
    expect(wrapper.text()).toContain('Create')
  })

  it('renders Badge with numeric caps', () => {
    const wrapper = mount(Badge, {
      props: {
        value: 1200,
        max: 999,
      },
    })

    expect(wrapper.classes()).toContain('m3-badge')
    expect(wrapper.text()).toBe('999+')
  })

  it('renders Icon with material font variations', () => {
    const wrapper = mount(Icon, {
      props: {
        name: 'search',
        size: 24,
        filled: true,
      },
    })

    expect(wrapper.classes()).toContain('m3-icon')
    expect(wrapper.text()).toBe('search')
    expect(wrapper.attributes('style')).toContain('font-variation-settings')
  })

  it('renders Card with subcomponents', () => {
    const wrapper = mount(Card, {
      props: {
        variant: 'outlined',
      },
      slots: {
        default: [CardHeader, CardContent],
      },
    })

    expect(wrapper.classes()).toContain('m3-card')
    expect(wrapper.attributes('data-variant')).toBe('outlined')
  })

  it('renders Divider', () => {
    const wrapper = mount(Divider, {
      props: {
        inset: true,
      },
    })

    expect(wrapper.classes()).toContain('m3-divider')
    expect(wrapper.attributes('data-inset')).toBe('')
  })

  it('renders LoadingIndicator and LinearProgress', () => {
    const loading = mount(LoadingIndicator, {
      props: {
        size: 36,
        contained: true,
      },
    })
    expect(loading.classes()).toContain('m3-loading-indicator')
    expect(loading.attributes('data-contained')).toBe('')

    const progress = mount(LinearProgress, {
      props: {
        value: 0.75,
        wavy: true,
      },
    })
    expect(progress.classes()).toContain('m3-linear-progress')
    expect(progress.attributes('data-wavy')).toBe('')
  })

  it('renders Switch and toggles on click', async () => {
    const wrapper = mount(Switch, {
      props: {
        modelValue: false,
        label: 'Dark mode',
      },
    })

    expect(wrapper.find('button[role="switch"]').attributes('aria-checked')).toBe('false')
    await wrapper.find('button[role="switch"]').trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([true])
  })

  it('renders Checkbox and updates modelValue', async () => {
    const wrapper = mount(Checkbox, {
      props: {
        modelValue: false,
        label: 'Agree to terms',
      },
    })

    const input = wrapper.find('input[type="checkbox"]')
    await input.setValue(true)
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([true])
  })

  it('renders Radio button and selects', async () => {
    const wrapper = mount(Radio, {
      props: {
        value: 'option1',
        modelValue: 'option2',
        label: 'Option 1',
      },
    })

    const input = wrapper.find('input[type="radio"]')
    await input.setValue()
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual(['option1'])
  })

  it('renders Slider and computes track width', () => {
    const wrapper = mount(Slider, {
      props: {
        modelValue: 50,
        min: 0,
        max: 100,
      },
    })

    expect(wrapper.classes()).toContain('m3-slider')
    const active = wrapper.find('.m3-slider__track-active')
    expect(active.attributes('style')).toContain('width: 50%')
  })

  it('renders TextField with clear button', async () => {
    const wrapper = mount(TextField, {
      props: {
        modelValue: 'Search query',
        label: 'Search',
        clearable: true,
      },
    })

    expect(wrapper.classes()).toContain('m3-field')
    const clearButton = wrapper.find('.m3-field__trailing')
    expect(clearButton.exists()).toBe(true)
    await clearButton.trigger('click')
    expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([''])
  })

  it('attaches vRipple directive', () => {
    const wrapper = mount({
      directives: { ripple: vRipple },
      template: '<button v-ripple>Click me</button>',
    })

    expect(wrapper.find('.m3-ripple').exists()).toBe(true)
  })
})
