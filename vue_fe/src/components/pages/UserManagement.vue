

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
    <div class="row">
      <div class="col text-end">
        <button class="btn btn-primary">
          Thêm mới
        </button>
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
                <button type="button" class="btn px-2 py-0" 
                        data-bs-toggle="modal" data-bs-target="#UserEditAddModal"
                        @click="showModal('edit', 1)">
                  <i class="fa-solid fa-pen text-info"></i>
                </button>
                <button type="button" class="btn px-2 py-0">
                  <i class="fa-solid fa-trash-can text-danger"></i>
                </button>
                <button type="button" class="btn px-2 py-0"
                        data-bs-toggle="modal" data-bs-target="#UserEditAddModal"
                        @click="showModal('edit', 1)">
                        <i class="fa-solid fa-user-lock text-warning"></i>
                </button>
            </div>
            </td>
          </tr>
        </tbody>
      </table>
      <!-- ##### MODAL EDIT/ADD USER ##### -->
      <div class="modal fade" id="UserEditAddModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title">{{ modal.title }}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="mb-3">
                <label for="" class="form-label">Tên người dùng</label>
                <input type="text" class="form-control" placeholder="Nguyễn Văn A">
              </div>
              <div class="mb-3">
                <label class="form-label">Email</label>
                <input type="text" class="form-control" placeholder="name@example.com">
              </div>
              <div class="mb-3">
                <label class="form-label">Mật khẩu</label>
                <input type="email" class="form-control">
              </div>
              <div class="mb-3">
                <label class="form-label">Xác nhận mật khẩu</label>
                <input type="email" class="form-control">
              </div>
              <div class="mb-3">
                <label class="form-label">Nhóm người dùng</label>
                <select class="form-control">
                  <option label="Chọn nhóm"></option>
                  <option value="Firefox">Firefox</option>
                </select>
              </div>
              <div class="mb-3">
                <label class="form-label">Xác nhận mật khẩu</label>
                <input type="email" class="form-control">
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Đóng</button>
              <button type="button" class="btn btn-primary">{{ modal.actions }}</button>
            </div>
          </div>
        </div>
      </div>
    </div>  
  </div>  
</template>

<script>

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
      ], 
      modal: {
        title: 'title',
        actions: 'Save'
      }
    }
  },
  mounted(){
    this.getUsers()
  },
  methods:{
    getUsers: function(){
      this.$axios.get('/user')
      .then(response => {
        this.users = response.data.data;
        return
      })
      .catch((err) => console.log(err));
    },
    showModal: function(type, id = null){
      if(type === 'edit' && id != null){
        this.modal.title = `Chỉnh sửa user`,
        this.modal.actions = 'Lưu'
      }
      if(type === 'edit'){
        this.modal.title = `Tạo mới user`,
        this.modal.actions = 'Tạo'
      }
    }
  }
}
</script>