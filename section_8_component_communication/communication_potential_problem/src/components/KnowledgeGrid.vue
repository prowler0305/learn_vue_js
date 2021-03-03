<template>
  <ul>
    <knowledge-element
      v-for="topic in topics"
      :key="topic.id"
      :id="topic.id"
      :topic-name="topic.title"
      :description="topic.description">
    </knowledge-element>
    <!--      @select-topic="$emit('select-topic', $event)"-->
  </ul>
</template>

<script>
export default {
  // Use the inject property which can only be done if this component is a child of a parent or grandparent component. For example here KnowledgeGrid is a child of KnowledgeBase which is also a child of App.vue. You can't do this with neighbor type components, like passing data from ActiveElement to KnowledgeGrid because one isn't a child of another.
  inject: ['topics'],
  // props: ['topics'],
  // emits: ['select-topic']
};
</script>
