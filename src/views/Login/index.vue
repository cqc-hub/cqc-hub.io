<script type="text/ecmascript-6">
import common from '@/common';
import { initLogin } from './loginAction';
import {
  getCurrentInstance,
  nextTick,
  ref
}
  from 'vue';

const { initBtnStyle } = common;

export default {
  setup() {
    const { ctx } = getCurrentInstance();
    ctx.$message.info('请登录');

    const loginLogo = ref({
      value: require('@/assets/imgs/login/loginLogo.svg')
    });

    nextTick(() => {
      initBtnStyle();
      initLogin();
    });

    return {
      loginLogo
    };
  },

  render() {
    return (
      <div class='my-demo-login'>
        <div class='container'>
          <h1 >
            <img
              src={this.loginLogo.value}
            />
          </h1>
          <label class='container-tip'>请登录</label>
          <form>
            <div class='form-control'>
              <input type='text' required />
              <label>请输入账号</label>
            </div>

            <div class='form-control'>
              <input type='password' required />
              <label>请输入密码</label>
            </div>

            <button class='btn ripple'>
              登录
            </button>

            <p class='text' />
          </form>
        </div>
      </div>
    );
  }
};
</script>

