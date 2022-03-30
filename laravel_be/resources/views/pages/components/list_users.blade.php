@if($data->count() > 0)
    @foreach($data as $i => $v)
    @php
        $status = $v->is_active == 1 ?
                            '<span class="text-success">Đang hoạt động</span>' :
                            '<span class="text-danger">Tạm khóa</span>';
        $numPage = $page ? $page : 1;
        $index = $numPage*10-10+$i+1;
    @endphp
    <tr>
        <th scope="row">{{ $index }}</th>
        <td class="text-truncate">{{ $v->name }}</td>
        <td>{{ $v->email }}</td>
        <td class="text-truncate">{{ $v->group_role }}</td>
        <td>{!! $status !!}</td>
        <td>
            <div class="btn-icon-list">
            <button type="button" class="btn px-2 py-0 min-h-unset" data-id="{{ $v->id }}" onclick="modalAddEditUser(event ,'edit')"
                    data-bs-toggle="modal" data-bs-target="#UserEditAddModal">
                <i class="fa-solid fa-pen text-info"></i>
            </button>
            <button type="button" class="btn px-2 py-0 min-h-unset btn-delete-user" data-id="{{ $v->id }}">
                <i class="fa-solid fa-trash-can text-danger"></i>
            </button>
            <button type="button" class="btn px-2 py-0 min-h-unset btn-block-user" data-id="{{ $v->id }}">
                    <i class="fa-solid fa-user-lock text-warning"></i>
            </button>
        </div>
        </td>
    </tr>
    @endforeach
@else
    <tr>
        <td colspan="6" class="font-weight-bold text-center">Không có dữ liệu</td>
    </tr>
@endif


