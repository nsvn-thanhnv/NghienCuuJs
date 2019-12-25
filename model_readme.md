# MVC: Model View Controller
# MVP: Model View Presenter
# MVVM: Model View View-Model

![](https://images.viblo.asia/b20c8a14-411c-463d-b29b-0d266957b1f2.png)

## MVVM: 
+ Mô hình MVVM hỗ trợ two-way data binding giữa View và View-Model. Điều này cho phép cập nhật tự động sự thay đổi ở trong ViewModel đến View, làm View giống như một ánh xạ hiển thị trạng thái của ViewModel ở mọi thời điểm. Đồng thời cho phép View cập nhật tự động ngược lại những input dữ liệu hoặc action của user đến ViewModel.
+ Nên dùng MVVM khi có thể binding dữ liệu thông qua DataContext.
+ Cả 3 phần View, ViewModel, Model đều chạy phía client side
+ Có thể thay thế tâng View trong MVC bằng MVVM
![](https://images.viblo.asia/7c3c0345-df49-4ca6-9114-1265e964f7fb.jpg)

### View Model
+ Là lớp trung gian giữa View và Model, xem như là thành phần thay thế cho Controller trong MVC
+ ViewModel không hề biết gì về View, một ViewModel có thể được sử dụng cho nhiều View (one-to-many). 
+ ViewModel sử dụng Observer design pattern để liên lạc với View (thường được gọi là binding data, có thể là 1 chiều hoặc 2 chiều tùy nhu cầu ứng dụng).
![](https://miro.medium.com/max/1748/1*1WmGkV517yA99bwk0P7m-g.png)

### Model
+ Model là các đối tượng giúp truy xuất và thao tác trên dữ liệu thực sự.

### View
+ View là phần giao diện của ứng dụng để hiển thị dữ liệu và nhận tương tác của người dùng.
+ Nó có khả năng thực hiện các hành vi và phản hồi lại người dùng thông qua tính năng binding, command.

### Ưu điểm
+ Ưu điểm lớn nhất của MVVM là người dùng có thể thực hiện unit testing dễ dàng do không phải phụ thuộc vào View. 
+ Khi test, bạn không cần phải tạo mockup như mô hình MVP mà chỉ cần xác nhận biến observable thích hợp.

### Nhược điểm
+ MVVM có nhược điểm về khả năng duy trì. Khi gán biến và biểu thức vào View, các logic rải rác sẽ tăng dần theo thời gian, điều này khiến việc kiểm soát và thêm code dần trở nên khó khăn hơn.

### Ví dụ
+ Áp dụng mô hình MVVM cho game caro 
![](https://images.viblo.asia/e1566acd-4c3b-47a2-a3ff-463cb52c6e8a.png)

## Two-way data binding 
+ Binding dữ liệu ràng buộc giữa View và ViewModel
+ 