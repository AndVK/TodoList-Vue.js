const App = {
  data() {
    return {
      title: 'ToDo',
      placeholderString: 'Введите название задачи',
      inputValue: '',
      notes: ['Заметка №1', 'Заметка №2']
    }
  },
  methods: {
    addNewNote() {
      if(this.inputValue !== ''){
        this.notes.push(this.inputValue)
        this.inputValue = ''
      }
    },
    doubleCount() {
      console.log('double count');
      return this.notes.length * 2
    },
    toUpperCase(item){
      return item.toUpperCase()
    },
    deleteNote(index, $event) {
      this.notes.splice(index, 1)
    }
  },
  computed: { // эти свойства должны что то возвращать!
    doubleCountComputed() {
      console.log('doubleCountComputed');
      return this.notes.length * 2
    }
  },
  watch: { // можем следить за изменением переменной, которой захотим
    inputValue(value) {
      if (value.length > 10) {
        this.inputValue = ''
      }
    }
  }
}


Vue.createApp(App).mount('#app')


