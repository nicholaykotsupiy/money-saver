export default {
  data: () => ({
    isActive: false,
    isOptionActive: false,
    isCalculatorActive: false,
    isEditActive: false,
    currentCaregory: {},
  }),
  methods: {
    switchForm() {
      this.isActive = !this.isActive
    },
    switchOptionForm(data) {
      if (!this.isOptionActive) {
        this.currentCaregory = data.category
      }

      this.isOptionActive = !this.isOptionActive
    },
    switchCalculator() {
      if (!this.isCalculatorActive) {
        this.switchOptionForm()
      }

      this.isCalculatorActive = !this.isCalculatorActive
    },
    swichEditPanel() {
      this.isEditActive = !this.isEditActive
    },
  },
}