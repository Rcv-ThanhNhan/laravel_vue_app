@foreach($data as $v)
@php
    $status = $v->is_active == 1 ?
                        '<span class="text-success">Đang hoạt động</span>' :
                        '<span class="text-danger">Tạm khóa</span>';
@endphp
<tr>
    <th scope="row">{{ $v->id }}</th>
    <td>{{ $v->name }}</td>
    <td>{{ $v->email }}</td>
    <td>{{ $v->group_role }}</td>
    <td>{!! $status !!}</td>
    <td>
        <div class="btn-icon-list">
        <button type="button" class="btn px-2 py-0 min-h-unset"  onclick="modalAddEditUser('edit', {{ $v->id }})"
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
