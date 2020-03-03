<template>
  <div class="mb-3">
    <div class="media mb-2">
      <!--User Avatar-->
      <img class="mr-3"
           src="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22100%22%20height%3D%22100%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20100%20100%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_17071aa67c0%20text%20%7B%20fill%3Argba(255%2C255%2C255%2C.75)%3Bfont-weight%3Anormal%3Bfont-family%3AHelvetica%2C%20monospace%3Bfont-size%3A10pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_17071aa67c0%22%3E%3Crect%20width%3D%22100%22%20height%3D%22100%22%20fill%3D%22%23777%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2213.546875%22%20y%3D%2236.5%22%3E100x100%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E">
      <!--------------->
      <div class="media-body">
        <!--Comment Header-->
        <div class="d-flex justify-content-between">
          <div>
            <a href="#" class="h5 mr-1">{{user_name}}</a>
            <button class="btn-sm btn-outline-secondary">Add a comment</button>
            <div class="text-muted comment-data small">{{comment_data}}</div>
          </div>
          <div>
            <div>
              <!--Rate-->
              <i @click="rateComment(true)" class="fas fa-chevron-up lighter-icon"></i> {{like}}
              <i @click="rateComment(false)" class="fas fa-chevron-down lighter-icon"></i> {{dislike}}
              <!--Complaint-->
              <i class="ml-2 fas fa-flag lighter-icon"></i>
            </div>
          </div>
        </div>
        <!--Comment Body-->
        <div class="comment-text">
          <slot name="commentText">{{commentText}}</slot>
        </div>
        <!---------------->
      </div>
    </div>
    <!--Answers-->
    <div v-if="answers">
      <button @click="showAns" class="btn btn-block btn-outline-dark p-0"><i :class="'fas fa-caret-' + btnArrow"></i> Answers ({{answers_count}})
      </button>
      <div v-if="showAnswers" class="border-left pl-5 my-3">
        <slot name="answers"></slot>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      user_name: String,
      comment_data: String,
      rates: {
        type: Array,
        default: 0,
      },
      commentText: String,
      answers: {
        type: Number,
        default: 0
      },
      answers_count: Number
    },
    data() {
      return {
        likeRated: false,
        dislikeRated: false,
        like: this.rates[0],
        dislike: this.rates[1],
        showAnswers: false,
        btnArrow: "down",
      }
    },
    methods: {
      showAns() {
        this.showAnswers = !this.showAnswers;
        this.showAnswers ? this.btnArrow = "up" : this.btnArrow = "down"
      },
      rateComment(i) {
        if (i) {
          if (this.dislikeRated && !this.likeRated) {
            this.like++;
            this.dislike--;
            this.likeRated = true;
            this.dislikeRated = false
          } else if (!this.likeRated) {
            this.like++;
            this.likeRated = true
          } else {
            this.like--;
            this.likeRated = false
          }
        } else {
          if (this.likeRated && !this.dislikeRated) {
            this.dislike++;
            this.like--;
            this.likeRated = false;
            this.dislikeRated = true;
          } else if (!this.dislikeRated) {
            this.dislike++;
            this.dislikeRated = true
          } else {
            this.dislike--;
            this.dislikeRated = false
          }
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .comment-text {
    line-height: 1.35;
  }
</style>
