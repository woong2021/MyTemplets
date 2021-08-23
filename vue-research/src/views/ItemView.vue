<template>
  <div>
    <section>
      <!-- 질문 상세 정보 -->
      <article class="user-container">
        <div>
          <i class="fas fa-user"></i>
        </div>
        <div class="user-description">
          <router-link v-bind:to="`/user/${fetchedItem.user}`">{{ fetchedItem.user }}</router-link>
          <div class="time">
            {{ fetchedItem.time_ago }}
          </div>
        </div>
      </article>
    </section>
    <section>
      <!-- 질문 댓글 -->
      <article>
        <h2>{{ fetchedItem.title }}</h2>
      </article>
      <article v-html="fetchedItem.content">
      </article>
    </section>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters(['fetchedItem'])
  },

  created() {
    const itemId = this.$route.params.id;
    console.log(itemId); // id값 확인

    this.$store.dispatch('FETCH_ITEM', itemId);
  }
}
</script>

<style scoped>
  .user-container{
    display: flex;
    padding: .5rem;
    align-items: center;
  }

  .fa-user{
    font-size: 2.5rem;
  }

  .user-description{
    padding-left: 8px;
  }

  .time{
    font-size: .7rem;
  }
</style>