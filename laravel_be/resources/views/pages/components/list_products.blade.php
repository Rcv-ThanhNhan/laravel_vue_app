@if($data->count() > 0)
    @foreach($data as $i => $v)
    @php
        $is_sale =  ($v->is_sale === 1)  ?  '<span class="text-success">Đang bán</span>' :
                    (($v->is_sale === 2) ?  '<span class="text-success">Hết hàng</span>' :
                                            '<span class="text-danger">Ngừng bán</span>');

        $numPage = $page ? $page : 1;
        $index = $numPage*10-10+$i+1;
    @endphp
    <tr>
        <th scope="row">{{ $index }}</th>
        <td class="product-code">
            {{ $v->product_id }}
            <div class="image-product-container">
                <img src="{{ asset(getUrlImage($v->product_image)) }}" alt="">
            </div>
        </td>
        <td class="text-truncate">{{ $v->product_name }}</td>
        <td class="text-truncate">{{ $v->description }}</td>
        <td>{{ number_format($v->product_price, 0, ',', '.') }} VNĐ</td>
        <td>{!! $is_sale !!}</td>
        <td>
            <div class="btn-icon-list">
                <button type="button" class="btn px-2 py-0 min-h-unset"  onclick="modalAddEditProduct('edit', '{{ $v->product_id }}')"
                        data-bs-toggle="modal" data-bs-target="#productEditAddModal">
                    <i class="fa-solid fa-pen text-info"></i>
                </button>
                <button type="button" class="btn px-2 py-0 min-h-unset btn-delete-product" data-id="{{ $v->product_id }}">
                    <i class="fa-solid fa-trash-can text-danger"></i>
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


