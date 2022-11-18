# Controllers are responsible for handling incoming requests and returning responses to the client.

- Nó xử lý các yêu cầu (requests) đến và trả về các phản hồi (responses) cho người dùng.

# Controllers are defined as classes that are decorated with the `@Controller` decorator.

- Controller được định nghĩa như là các class được đánh dấu với decorator `@Controller`.

# A controller's purpose is to receive specific requests for the application. The routing mechanism controls which controller receives which requests. Frequently, each controller has more than one route, and different routes can perform different actions.

- Mục đích của controller là nhận các yêu cầu cụ thể cho ứng dụng. Cơ chế routing điều khiển controller nào nhận được yêu cầu nào. Thường thì mỗi controller có nhiều hơn một route, và các route khác nhau có thể thực hiện các hành động khác nhau.

# Routing: @Get(), @Post(), @Put(), @Delete(), @Patch(), @Options(), @Head(), @All(). Using this built-in method, when a request handler returns a JavaScript object or array, it will automatically be serialized to JSON. When it returns a JavaScript primitive type (e.g., , , ), however, Nest will send just the value without attempting to serialize it. This makes response handling simple: just return the value, and Nest takes care of the rest. Furthermore, the response's status code is always 200 by default, except for POST requests which use 201. We can easily change this behavior by adding the decorator at a handler-level (@HttpCode(201)) or at a controller-level (@Controller({ statusCode: 201 })).

- Routing: @Get(), @Post(), @Put(), @Delete(), @Patch(), @Options(), @Head(), @All(). Sử dụng các method này, khi một request handler trả về một object hoặc array của JavaScript, nó sẽ tự động được serialize (tuần tự hoá) thành JSON. Khi nó trả về một kiểu dữ liệu nguyên thủy của JavaScript, Nest sẽ chỉ gửi giá trị mà không cố gắng serialize nó. Điều này làm cho việc xử lý phản hồi đơn giản: chỉ cần trả về giá trị, và Nest sẽ lo cho phần còn lại. Ngoài ra, status code của phản hồi luôn là 200 theo mặc định, trừ khi yêu cầu POST sử dụng 201. Chúng ta có thể dễ dàng thay đổi hành vi này bằng cách thêm decorator ở một handler-level (@HttpCode(201)) hoặc ở một controller-level (@Controller({ statusCode: 201 })).

# Request: Handlers often need access to the client request details. Nest provides access to the request object of the underlying platform (Express by default). We can access the request object by instructing Nest to inject it by adding the decorator to the handler's signature (@Req())

- Request: Handler thường cần truy cập vào chi tiết của yêu cầu của người dùng. Nest cung cấp truy cập vào request object của nền tảng (Express theo mặc định). Chúng ta có thể truy cập vào request object bằng cách chỉ dẫn Nest để inject nó bằng cách thêm decorator vào chữ ký của handler (@Req())

# Response: Handlers often need to send a response to the client. Nest provides access to the response object of the underlying platform (Express by default). We can access the response object by instructing Nest to inject it by adding the decorator to the handler's signature (@Res())

- Response: Handler thường cần gửi phản hồi (response) đến người dùng. Nest cung cấp truy cập vào response object của nền tảng (Express theo mặc định). Chúng ta có thể truy cập vào response object bằng cách chỉ dẫn Nest để inject nó bằng cách thêm decorator vào chữ ký của handler (@Res())

# Next: Handlers often need to pass control to the next handler in the chain. Nest provides access to the next function of the underlying platform (Express by default). We can access the next function by instructing Nest to inject it by adding the decorator to the handler's signature (@Next())

- Next: Handler thường cần truyền quyền điều khiển cho handler tiếp theo trong chuỗi. Nest cung cấp truy cập vào next function của nền tảng (Express theo mặc định). Chúng ta có thể truy cập vào next function bằng cách chỉ dẫn Nest để inject nó bằng cách thêm decorator vào chữ ký của handler (@Next())

# @Session, @Param, @Body, @Query, @Headers, @Ip, @HostParam: Nest provides a set of decorators that can be used to extract data from the request object. These decorators are @Session(), @Param(), @Body(), @Query(), @Headers(), @Ip(), and @HostParam(). We can use these decorators to extract data from the request object and inject it into the handler's signature.

- @Session, @Param, @Body, @Query, @Headers, @Ip, @HostParam: Nest cung cấp một tập hợp các decorator có thể được sử dụng để trích xuất dữ liệu từ request object. Những decorator này là @Session(), @Param(), @Body(), @Query(), @Headers(), @Ip(), và @HostParam(). Chúng ta có thể sử dụng những decorator này để trích xuất dữ liệu từ request object và inject nó vào chữ ký của handler.

# @Render: The @Render() decorator can be used to render a template. It can be used in combination with the @Controller() decorator to render a template when a request is received.

- @Render: Decorator @Render() có thể được sử dụng để render một template. Nó có thể được sử dụng kết hợp với decorator @Controller() để render một template khi nhận được một request.

# Route wildcards: Pattern based routes are supported as well. For instance, the asterisk is used as a wildcard, and will match any combination of characters.

- Route wildcards: Các route dựa trên pattern cũng được hỗ trợ. Ví dụ, dấu sao được sử dụng như một wildcard, và sẽ khớp bất kỳ tổ hợp ký tự nào.
- ví dụ: @Get('ab\*cd') // match abcd, abxcd, abRANDOMcd, ab123cd

# Status Code: The @HttpCode() decorator can be used to set the status code of the response.

- Status Code: Decorator @HttpCode() có thể được sử dụng để thiết lập status code của response.

# Headers: The @Header() decorator can be used to set the headers of the response.

- Headers: Decorator @Header() có thể được sử dụng để thiết lập headers của response.

# Redirect: The @Redirect() decorator can be used to redirect the client to a different URL.

- Redirect: Decorator @Redirect() có thể được sử dụng để chuyển hướng người dùng đến một URL khác.

# Route Parameters: Nest supports route parameters. Route parameters are extracted from the request URL and passed to the handler as arguments. The @Param() decorator can be used to extract route parameters from the request URL.

- Route Parameters: Nest hỗ trợ route parameters. Route parameters được trích xuất từ request URL và được truyền vào handler như các đối số. Decorator @Param() có thể được sử dụng để trích xuất route parameters từ request URL (@Param)

# Sub-Domain Routing: Nest supports sub-domain routing. To enable sub-domain routing, we need to enable the subdomain offset option in the application configuration. The subdomain offset option specifies the number of subdomains to ignore when extracting the subdomain from the request URL. For example, if the subdomain offset is set to 2, the subdomain will be extracted from the third level domain. For example, if the request URL is http://www.example.com, the subdomain will be www.

- Sub-Domain Routing: Nest hỗ trợ sub-domain routing. Để bật sub-domain routing, chúng ta cần bật tùy chọn subdomain offset trong cấu hình ứng dụng. Tùy chọn subdomain offset chỉ định số lượng subdomains để bỏ qua khi trích xuất subdomain từ request URL. Ví dụ, nếu subdomain offset được thiết lập thành 2, subdomain sẽ được trích xuất từ third level domain. Ví dụ, nếu request URL là http://www.example.com, subdomain sẽ là www.
