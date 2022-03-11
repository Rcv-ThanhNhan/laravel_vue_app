

<template>

  <div class="container mt-3">
    <h2 class="title-page mb-3">
      Quản lí người dùng
    </h2>
    <div class="row row-sm mb-3">
      <div class="col-lg">
        <label for="">Tên</label>
        <input class="form-control" placeholder="Nhập họ tên..." type="text">
      </div>
      <div class="col-lg">
        <label for="">Email</label>
        <input class="form-control" placeholder="Email" type="text">
      </div>
      <div class="col-lg">
        <label for="">Nhóm</label>
        <select class="form-control">
          <option label="Chọn nhóm"></option>
          <option value="Firefox">Firefox</option>
        </select>
      </div>
      <div class="col-lg">
        <label for="">Trạng thái</label>
        <select class="form-control">
          <option label="Chọn trạng thái"></option>
          <option value="Firefox">Firefox</option>
        </select>
      </div>
    </div>
    <div class="table-responsive">
      <table class="table mg-b-0">
        <thead>
          <tr>
            <th>#</th>
            <th>Họ tên</th>
            <th>Email</th>
            <th>Nhóm</th>
            <th>Trạng thái</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in users" :key="user.id">
            <th scope="row">{{ user.id }}</th>
            <td>{{ user.name }}</td>
            <td>{{ user.email }}</td>
            <td>{{ user.group }}</td>
            <td>{{ user.status }}</td>
            <td>
              <div class="btn-icon-list">
                <button type="button" class="btn px-2 py-0" @click="showAlert"><i class="fa-solid fa-pen text-info"></i></button>
                <button type="button" class="btn px-2 py-0"><i class="fa-solid fa-trash-can text-danger"></i></button>
                <button type="button" class="btn px-2 py-0"><i class="fa-solid fa-user-lock text-warning"></i></button>
            </div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>  
  </div>  
</template>

<script>
import axios from 'axios';
export default {
  data(){
    return {
      users: [
        {
          "id": 1,
          "name":"Nguyễn Văn A",
          "email":"a.nguyen@gmail.com",
          "group":"admin",
          "status":"Đang hoạt động",
          "created_at":"--",
          "updated_at":"--"
        }
      ]
    }
  },
  mounted(){
    this.getUser()
  },
  methods:{
    getUser: function(){
      // console.log(process.env.VUE_APP_API_URL);
      axios.get('http://127.0.0.1:8000/api/user')
      .then(response => {
        this.users = response.data.data;
      })
      .catch((err) => console.log(err));
    },
    showAlert() {
      // Use sweetalert2
      this.$swal('Hello Vue world!!!');
    },
  }
}
</script>