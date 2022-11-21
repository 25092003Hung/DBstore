Create Database DBSportStore;

use DBSportStore;
-- Bang AdminUser

CREATE TABLE [dbo].[AdminUser] (
    [ID]           INT            NOT NULL,
    [NameUser]     NVARCHAR (50) NULL,
    [RoleUser]     NVARCHAR (50) NULL,
    [PasswordUser] NCHAR (50)     NULL,
    PRIMARY KEY CLUSTERED ([ID] ASC)
);

--Bang Category
CREATE TABLE [dbo].[Category] (
    [Id]       INT            IDENTITY (1, 1) NOT NULL,
    [IDCate]   NCHAR (20)     NOT NULL,
    [NameCate] NVARCHAR (50) NULL,
    PRIMARY KEY CLUSTERED ([IDCate] ASC)
);
--Bang Customer
CREATE TABLE [dbo].[Customer] (
    [IDCus]    INT            IDENTITY (1, 1) NOT NULL,
    [NameCus]  NVARCHAR (50) NULL,
    [PhoneCus] NVARCHAR (15)  NULL,
    [EmailCus] NVARCHAR (50) NULL,
    PRIMARY KEY CLUSTERED ([IDCus] ASC)
);

--Bang Product
CREATE TABLE [dbo].[Product] (
    [ProductID]     INT             IDENTITY (1, 1) NOT NULL,
    [NamePro]       NVARCHAR (50)  NULL,
    [DecriptionPro] NVARCHAR (1000)  NULL,
    [Category]      NCHAR (20)      NULL,
    [Price]         DECIMAL (18, 2) NULL,
    [ImagePro]      NVARCHAR (50)  NULL,
    PRIMARY KEY CLUSTERED ([ProductID] ASC),
    CONSTRAINT [FK_Pro_Category] FOREIGN KEY ([Category]) REFERENCES [dbo].[Category] ([IDCate])
);
--Bang OrderPro
CREATE TABLE [dbo].[OrderPro] (
    [ID]               INT            IDENTITY (1, 1) NOT NULL,
    [DateOrder]        DATE           NULL,
    [IDCus]            INT            NULL,
    [AddressDeliverry] NVARCHAR (50) NULL,
    PRIMARY KEY CLUSTERED ([ID] ASC),
    FOREIGN KEY ([IDCus]) REFERENCES [dbo].[Customer] ([IDCus])
);

--Bang OrderDetail
CREATE TABLE [dbo].[OrderDetail] (
    [ID]        INT        IDENTITY (1, 1) NOT NULL,
    [IDProduct] INT        NULL,
    [IDOrder]   INT        NULL,
    [Quantity]  INT        NULL,
    [UnitPrice] FLOAT (53) NULL,
    PRIMARY KEY CLUSTERED ([ID] ASC),
    FOREIGN KEY ([IDProduct]) REFERENCES [dbo].[Product] ([ProductID]),
    FOREIGN KEY ([IDOrder]) REFERENCES [dbo].[OrderPro] ([ID])
);

-- Insert dữ liệu
use DBSportStore

------AdminUser
Insert into AdminUser (ID, NameUser, RoleUser, PasswordUser)
	values (1, 'khaihung', 'admin', 'khaihung123')
Insert into AdminUser (ID, NameUser, RoleUser, PasswordUser)
	values (2, 'phuongnam', 'admin', 'phuongnam123')

------Customer
Insert into Customer (NameCus, PhoneCus, EmailCus)
	values (N'Nguyễn Văn Cùi Bắp', '0903784512', 'cuibap@gmail.com')
Insert into Customer (NameCus, PhoneCus, EmailCus)
	values (N'Lê thị Mắm Tôm', '0913678345', 'mamtom@gmail.com')

------Category
Insert into Category (IDCate, NameCate)
    Values(N'NH', N'Nước hoa')
Insert into Category (IDCate, NameCate)
    Values(N'MP', N'Mỹ phẩm')
	
select * from Category

--------Product
Insert into Product(NamePro, DecriptionPro, Category, Price, ImagePro)
    values (N'Gucci Flora', N'Gucci Flora Gorgeous Gardenia được ra mắt với phiên bản Eau de Parfum mới, có nồng độ tinh dầu cao hơn phiên bản Eau de Toilette trước đó. Với dấu ấn hương hoa tươi vui, mùi hương xoay quanh nốt hương hoa dành dành, loài hoa bừng nở trong bình minh và thường được dùng để điều chế các loại tiên dược.', N'NH', 99, 'Gucci Flora.png')
Insert into Product (NamePro, DecriptionPro, Category, Price, ImagePro)
    values (N'Scandal', N'Scandal tiếp nối xu hướng mùi hương tông Ngọt nhưng với một điểm nhấn mới lạ và sẽ làm phong phú thêm bộ sưu tập nước hoa của Jean Paul Gaultier vào mùa xuân. Và từ đây mang đến một ngôi sao mới của thương hiệu Jean Paul Gaultier, được đặt tên là SCANDAL.', N'NH', 99, 'Scandal.png')
	Insert Into Product(NamePro, DecriptionPro, Category, Price, ImagePro)
	values(N'Savage Dior',N'Những đặc điểm nổi bật về mùi hương của Dior Sauvage là một mùi hương Xanh, nam tính và nịnh mũi với các nốt hương chủ đạo của Cam Chanh, hòa quyện với vị cay cay, mạnh mẽ của Tiêu và kết lại với nốt hương Ambroxan - nguyên liệu lấy cảm hứng từ món quà của đại dương, Long Diên Hương. Luôn đứng đầu danh sách những chai nước hoa được săn đón, phổ biến nhất, nhưng mùi hương của Dior Sauvage vẫn luôn giữ vững được phong độ, không hề mờ nhạt trước muôn vàn ấn phẩm mùi hương khác.', N'NH',99,'Sauvage Dior.png')
Insert Into Product(NamePro, DecriptionPro, Category, Price, ImagePro)
	values(N'Narciso Musc Noir Rose',N'Khi đào sâu hơn về ý nghĩa của mùi hương, bóc tách từng lớp, ta sẽ thật sự nhận ra rằng những cá thể đơn lẻ khi hợp lại sẽ tạo nên thứ hương bồng bềnh, vui tươi và dễ yêu như chính sắc hồng mà nước hoa Narciso Musc Noir Rose đang mang.', N'NH',99,'Narciso Musc Noir Rose.png')
Insert Into Product(NamePro, DecriptionPro, Category, Price, ImagePro)
	values(N'Gucci Bloom',N'Estee Lauder Advanced Night Repair Eye Complex là phiên bản mới nhất, mạnh hơn, nhanh và hiệu quả hơn với tất cả các dấu hiệu lão hóa mắt, giúp đôi trẻ trung hơn và khỏe mạnh hơn', N'NH',99,'Gucci Bloom.png')
Insert Into Product(NamePro, DecriptionPro, Category, Price, ImagePro)
	values(N'Salvatore Ferragamo Signorina Misteriosa',N'Salvatore Ferragamo Signorina Eleganza nhắm đến các quý cô chững chạc bởi một mùi hương nữ khá độc đáo với một khởi đầu khá tươi mát và ngọt ngào, sau đó dần trở nên đậm đà nồng nàn và lôi cuốn hơn.',N'NH',99,'Salvatore Ferragamo Signorina.png')
	Insert Into Product(NamePro, DecriptionPro, Category, Price, ImagePro)
	values(N'Dior Capture Totale Intensive Essence Lotion',N'Dior Capture Totale Intensive Essence Lotion là dòng sản phẩm cao cấp đến từ thương hiệu Dior nổi tiếng. Sản phẩm hỗ trợ dượng da tươi trẻ và rạng rỡ',N'MP',99,'10.png')
	Insert Into Product(NamePro, DecriptionPro, Category, Price, ImagePro)
	values(N'Lancôme Genifique Yeux Eye Cream',N'Trị Bọng mắt, trị chảy xệ da dưới mắt. Trị thâm quầng mắt, mắt gấu trúc. Chống nhăn da vùng mắt, vết chân chim đuôi mắt. Dưỡng da vùng mắt sáng màu, đều màu, da tươi trẻ',N'MP',99,'11.png')
	Insert Into Product(NamePro, DecriptionPro, Category, Price, ImagePro)
	values(N'Versace Bright Crystal Perfumed Bath & Shower',N'Sữa tắm nước hoa Versace Bright Crystal mang lại sự thư giãn và ngọt ngào suốt cả ngày bởi mùi hương nhẹ nhàng, gợi lên nét gợi cảm và ngọt ngào',N'MP',99,'12.png')
	Insert Into Product(NamePro, DecriptionPro, Category, Price, ImagePro)
	values(N'Sữa Chống Nắng Anessa Dưỡng Da Kiềm Dầu',N'Sữa Chống Nắng Anessa là sản phẩm chống nắng đến từ thương hiệu chống nắng dưỡng da hàng đầu Nhật Bản, giúp chống lại tác hại của tia UV tối ưu dưới mọi điều kiện sinh hoạt',N'MP',99,'7.png')
	Insert Into Product(NamePro, DecriptionPro, Category, Price, ImagePro)
	values(N'YSL Le Cushion Encre De Peau Luminous Matte',N'YSL Le Cushion Encre De Peau Luminous Matte Cushion Foundation là dòng mới nhất và được cải tiến hơn với thiết kế vỏ da chevron mang tính biểu tượng của Saint Laurent',N'MP',99,'8.png')
	Insert Into Product(NamePro, DecriptionPro, Category, Price, ImagePro)
	values(N'Estee Lauder Advanced Night Repair Eye Complex',N'Estee Lauder Advanced Night Repair Eye Complex là phiên bản mới nhất, mạnh hơn, nhanh và hiệu quả hơn với tất cả các dấu hiệu lão hóa mắt, giúp đôi trẻ trung hơn và khỏe mạnh hơn',N'MP',99,'9.png')
	select *
	from Product

--------OrderPro
Insert into OrderPro (DateOrder, IDCus, AddressDeliverry)
	values ('01/01/2022', 1, N'155 Sư Vạn Hạnh,q10')

--------OrderDetail
Insert into OrderDetail (IDProduct, IDOrder, Quantity, UnitPrice)
	values (1, 1, 5, 600)
