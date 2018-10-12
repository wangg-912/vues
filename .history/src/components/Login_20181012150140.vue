<template>
    <Row type="flex" justify="center" align="middle">
      <Col span='4'>
        <Form ref="formInline" :model="formInline" :rules="ruleInline" class="login-box">
          <FormItem prop="user" style="margin-bottom:30px">
              <Input type="text" v-model="formInline.user" placeholder="用户名" size="large">
                  <Icon type="ios-person-outline" slot="prepend"></Icon>
              </Input>
          </FormItem>
          <FormItem prop="password" style="margin-bottom:30px">
              <Input type="password" v-model="formInline.password" placeholder="密码" size="large">
                  <Icon type="ios-lock-outline" slot="prepend"></Icon>
              </Input>
          </FormItem>
          <FormItem>
               <CheckboxGroup v-model="formItem.checkbox">
                  <Checkbox label="记住密码"></Checkbox>
              </CheckboxGroup>
          </FormItem>
          <FormItem>
              <Button type="primary" @click="handleSubmit('formInline')" size="large">登陆</Button>
          </FormItem>
      </Form>
      </Col >
    </Row>

</template>
<script>
    export default {
        data () {
            return {
                formInline: {
                    user: '',
                    password: ''
                },
                formItem:{
                  checkbox: [],
                },
                ruleInline: {
                    user: [
                        { required: true, message: '请输入用户名.', trigger: 'blur' }
                    ],
                    password: [
                        { required: true, message: '请输入密码.', trigger: 'blur' },
                        { type: 'string', min: 6, message: '密码长度不能小于6.', trigger: 'blur' }
                    ]
                }
            }
        },
        methods: {
            handleSubmit(name) {
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        //this.$Message.success('登陆成功!');
                        location.href = "/index"
                    } else {
                        this.$Message.error('用户名或密码为空!');
                    }
                })
            }
        }
    }
</script>
