<template>
  <base-dialog v-if="inputIsInvalid" title="Invalid Input" @close="confirmError">
    <template #default>
      <p>Unfortunately, at least one input value is invalid.</p>
      <p>
        Please check all input and make sure you enter at least a few characters into
        each input field
      </p>
    </template>
    <template #actions>
      <base-button @click="confirmError">Okay</base-button>
    </template>
  </base-dialog>
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input type="text" id="title" name="title" ref="resourceTitle"/>
      </div>
      <div class="form-control">
        <label for="description">Description</label>
        <textarea id="description" name="description" rows="3" ref="resourceDescription">
        </textarea>
      </div>
      <div class="form-control">
        <label for="link">Link</label>
        <input type="url" id="link" name="link" ref="resourceLink"/>
      </div>
      <div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
import BaseCard from "@/components/UI/BaseCard";
import BaseButton from "@/components/UI/BaseButton";
import BaseDialog from "@/components/UI/BaseDialog";
export default {
  name: "AddResource",
  components: {BaseDialog, BaseButton, BaseCard},
  inject: ['addResource'],
  data(){
    return{
      inputIsInvalid: false
    }
  },
  methods:{
    confirmError(){
      this.inputIsInvalid = false
    },
    submitData(){
      if(this.$refs.resourceTitle.value.trim() === '' || this.$refs.resourceDescription.value.trim() === '' || this.$refs.resourceLink.value.trim() === ''){
        this.inputIsInvalid = true
        return;
      }
      const newResource = {
        id: new Date().toISOString(),
        title: this.$refs.resourceTitle.value,
        description: this.$refs.resourceDescription.value,
        link: this.$refs.resourceLink.value
      }
      this.addResource(newResource);
      this.$refs.resourceTitle.value = ''
      this.$refs.resourceDescription.value = ''
      this.$refs.resourceLink.value = ''
    }
  }
}
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
