<template>
  <table>
    <thead>
      <tr>
        <th v-for="field in fields" :key="'w-table-field-'+field.key">{{ field.label }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.id">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.address }}</td>
        <td>{{ item.phone }}</td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'VincTable',

  props: {
    items: {
      type: Array,
      default: () => [
        { id: 1, name: 'Wadday', address: 'Veem', phone: '9809655' },
        { id: 2, name: 'Ammadu', address: 'Aliga', phone: '7809876' }
      ]
    },
    fields: {
      type: Array,
      default: () => [
        { key: 'id', label: 'Id' },
        { key: 'name', label: 'Name' },
        { key: 'address', label: 'Address' },
        { key: 'phone', label: 'Phone' }
      ]
    }
  }
}
</script>
