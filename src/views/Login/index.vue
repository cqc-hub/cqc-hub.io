<script type="text/ecmascript-6">
import { loginAction } from './loginAction';
import backgroundParticles from '@/components/BackgroundParticles';
export default {
  components: { backgroundParticles },
  setup() {
    return {
      ...loginAction()
    };
  },

  render() {
    return (
      <div class='my-demo-login'>
        <background-Particles />
        <div class='container'>
          <h1 >
            <img
              src={ this.loginLogo.value }
            />
          </h1>
          <label class='container-tip'>请登录</label>
          <form
            onSubmit={ (e) => this.formSubmit(e) }
            class='login-form-validator'
          >
            <div class='form-control' title='请输入账号'>
              <input
                onInput={(e) => this.inputChange(e, 'account')}
                type='text'
                required
                autofocus
              />
              <label>请输入账号</label>
            </div>

            <div class='form-control' title='请输入密码'>
              <input
                onInput={(e) => this.inputChange(e, 'password')}
                type='password'
                required
              />
              <label>请输入密码</label>
            </div>

            <button
              class='btn ripple'
              onClick={ () => this.goLogin() }
            >
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

