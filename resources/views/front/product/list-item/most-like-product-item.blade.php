@foreach($most_like_products as $key => $value)
	<li class="product-item col-lg-3 col-md-4 col-sm-6 col-xs-4">
		<div class="product-user-action">
			<a href="" title="">
				<img src="{{ $value->p_i_name }}" alt="{{$value->alt}}">
			</a>
			<ul class="row">
				<li class="col-xs-4 like">
					<a href="" title="">
						<img src="http://i.imgur.com/LjwCZFM.png" alt="">
					</a>
				</li>
				<li class="col-xs-4 buy">
					<a href="" title="">
						<img src="http://i.imgur.com/O7whI4a.png" alt="">
					</a>
				</li>
				<li class="col-xs-4 follow">
					<a href="" title="">
						<img src="http://i.imgur.com/MgPip0a.png" alt="">
					</a>
				</li>
			</ul>
		</div>
		<div class="product-info-container">
			<a href="" title="" class="product-name text-center"><p>{{ $value->p_name }}</p></a>
			<div class="product-info clearfix">
				<a href="" title="" class="supplier-name"><p>{{ $value->s_name }}</p></a>
				<a href="" title="" class="product-price"><p>{{ $value->price }} đ</p></a>
			</div>
			<a href="" title="" class="product-sum-like"><span><img src="http://i.imgur.com/seWtRZc.png" alt=""> {{ $value->like }}</span></a>
		</div>
	</li>
@endforeach
<div class="most-like-product-total-page" total-page="{{ $most_like_products->lastPage()}}" current-page="{{ $most_like_products->currentPage() }}"></div>