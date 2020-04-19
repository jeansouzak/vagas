## Como usar

```jsx
function meuForm() {
  const option = [
    {
      label: 'Opção 1',
      value: 1
    },
    {
      label: 'Opção 2',
      value: 2
    },
    // ...
  ]
  return (
    // final form...
    <Field
      name="campo"
      component={SelectField}
      label="Estado"
      options={options}
    />
  )
}
```
