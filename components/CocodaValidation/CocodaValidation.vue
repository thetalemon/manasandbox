<template>
  <div class="inputPassword" :class="{ clearAll: checkAll }">
    <label>パスワード</label>
    <input
      v-model="password"
      class="inputpasswordArea"
      placeholder="パスワードを入力"
      @focus="onFocus"
      @input="onInput"
    >
    <div v-show="isFocus">
      <p :class="{ clearValidation: checkCharacterNum }" class="checkItem">
        8文字以上、100文字以下である
      </p>
      <p :class="{ clearValidation: checkIncludeNumber }" class="checkItem">
        数字を含んでいる
      </p>
      <p :class="{ clearValidation: checkIncludeUpperCase }" class="checkItem">
        英字の大文字を含んでいる
      </p>
      <p :class="{ clearValidation: checkIncludeLowerCase }" class="checkItem">
        英字の小文字を含んでいる
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InputPassword',
  data () {
    return {
      password: '',
      isFocus: false
    }
  },
  computed: {
    checkCharacterNum () {
      return this.password.length > 8 && this.password.length < 100
    },
    checkIncludeNumber () {
      return !!this.password.match(/[0-9]/)
    },
    checkIncludeUpperCase () {
      return !!this.password.match(/[A-Z]/)
    },
    checkIncludeLowerCase () {
      return !!this.password.match(/[a-z]/)
    },
    checkAll () {
      return (
        this.checkCharacterNum &&
        this.checkIncludeNumber &&
        this.checkIncludeUpperCase &&
        this.checkIncludeLowerCase
      )
    }
  },
  methods: {
    onFocus () {
      this.isFocus = true
    },
    onInput () {
      this.$emit('input',
        {
          value: this.password,
          check: this.checkAll
        })
    }
  }
}
</script>

<style lang='scss' scoped>
.inputPassword {
  margin-bottom: 16px;

  label {
    display: block;
    margin-bottom: 4px;
  }
  input {
    line-height: 2;
    width: 90%;
    padding-left: 5px;
    border-radius: 5px;
    border: 1px #777 solid;
    margin-bottom: 16px;
  }
  .checkItem {
    color: #c0c0c0;

    &::before {
      content: '✔︎ ';
    }

    &.clearValidation {
      color: #228b22;
    }
  }
  &.clearAll {
    .inputpasswordArea {
      border-color: #228b22;
      background: #98fb98;
    }
  }
}
</style>
