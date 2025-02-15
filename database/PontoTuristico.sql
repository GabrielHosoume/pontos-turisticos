USE [master]
GO
/****** Object:  Database [PontoTuristico]    Script Date: 12/01/2025 23:36:10 ******/
CREATE DATABASE [PontoTuristico]
 CONTAINMENT = NONE
 ON  PRIMARY 
( NAME = N'PontoTuristico', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\PontoTuristico.mdf' , SIZE = 8192KB , MAXSIZE = UNLIMITED, FILEGROWTH = 65536KB )
 LOG ON 
( NAME = N'PontoTuristico_log', FILENAME = N'C:\Program Files\Microsoft SQL Server\MSSQL15.SQLEXPRESS\MSSQL\DATA\PontoTuristico_log.ldf' , SIZE = 8192KB , MAXSIZE = 2048GB , FILEGROWTH = 65536KB )
 WITH CATALOG_COLLATION = DATABASE_DEFAULT
GO
ALTER DATABASE [PontoTuristico] SET COMPATIBILITY_LEVEL = 150
GO
IF (1 = FULLTEXTSERVICEPROPERTY('IsFullTextInstalled'))
begin
EXEC [PontoTuristico].[dbo].[sp_fulltext_database] @action = 'enable'
end
GO
ALTER DATABASE [PontoTuristico] SET ANSI_NULL_DEFAULT OFF 
GO
ALTER DATABASE [PontoTuristico] SET ANSI_NULLS OFF 
GO
ALTER DATABASE [PontoTuristico] SET ANSI_PADDING OFF 
GO
ALTER DATABASE [PontoTuristico] SET ANSI_WARNINGS OFF 
GO
ALTER DATABASE [PontoTuristico] SET ARITHABORT OFF 
GO
ALTER DATABASE [PontoTuristico] SET AUTO_CLOSE OFF 
GO
ALTER DATABASE [PontoTuristico] SET AUTO_SHRINK OFF 
GO
ALTER DATABASE [PontoTuristico] SET AUTO_UPDATE_STATISTICS ON 
GO
ALTER DATABASE [PontoTuristico] SET CURSOR_CLOSE_ON_COMMIT OFF 
GO
ALTER DATABASE [PontoTuristico] SET CURSOR_DEFAULT  GLOBAL 
GO
ALTER DATABASE [PontoTuristico] SET CONCAT_NULL_YIELDS_NULL OFF 
GO
ALTER DATABASE [PontoTuristico] SET NUMERIC_ROUNDABORT OFF 
GO
ALTER DATABASE [PontoTuristico] SET QUOTED_IDENTIFIER OFF 
GO
ALTER DATABASE [PontoTuristico] SET RECURSIVE_TRIGGERS OFF 
GO
ALTER DATABASE [PontoTuristico] SET  DISABLE_BROKER 
GO
ALTER DATABASE [PontoTuristico] SET AUTO_UPDATE_STATISTICS_ASYNC OFF 
GO
ALTER DATABASE [PontoTuristico] SET DATE_CORRELATION_OPTIMIZATION OFF 
GO
ALTER DATABASE [PontoTuristico] SET TRUSTWORTHY OFF 
GO
ALTER DATABASE [PontoTuristico] SET ALLOW_SNAPSHOT_ISOLATION OFF 
GO
ALTER DATABASE [PontoTuristico] SET PARAMETERIZATION SIMPLE 
GO
ALTER DATABASE [PontoTuristico] SET READ_COMMITTED_SNAPSHOT OFF 
GO
ALTER DATABASE [PontoTuristico] SET HONOR_BROKER_PRIORITY OFF 
GO
ALTER DATABASE [PontoTuristico] SET RECOVERY SIMPLE 
GO
ALTER DATABASE [PontoTuristico] SET  MULTI_USER 
GO
ALTER DATABASE [PontoTuristico] SET PAGE_VERIFY CHECKSUM  
GO
ALTER DATABASE [PontoTuristico] SET DB_CHAINING OFF 
GO
ALTER DATABASE [PontoTuristico] SET FILESTREAM( NON_TRANSACTED_ACCESS = OFF ) 
GO
ALTER DATABASE [PontoTuristico] SET TARGET_RECOVERY_TIME = 60 SECONDS 
GO
ALTER DATABASE [PontoTuristico] SET DELAYED_DURABILITY = DISABLED 
GO
ALTER DATABASE [PontoTuristico] SET ACCELERATED_DATABASE_RECOVERY = OFF  
GO
ALTER DATABASE [PontoTuristico] SET QUERY_STORE = OFF
GO
USE [PontoTuristico]
GO
/****** Object:  Table [dbo].[PontoTuristico]    Script Date: 12/01/2025 23:36:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[PontoTuristico](
	[IdPontoTuristico] [int] IDENTITY(1,1) NOT NULL,
	[Nome] [varchar](50) NOT NULL,
	[IdUf] [int] NOT NULL,
	[Cidade] [varchar](50) NULL,
	[Referencia] [varchar](50) NULL,
	[Descricao] [varchar](100) NULL,
	[InclusaoDataHora] [datetime] NULL,
PRIMARY KEY CLUSTERED 
(
	[IdPontoTuristico] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[UnidadeFederativa]    Script Date: 12/01/2025 23:36:10 ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[UnidadeFederativa](
	[IdUf] [int] IDENTITY(1,1) NOT NULL,
	[Descricao] [varchar](30) NOT NULL,
	[Sigla] [char](2) NOT NULL,
	[CodigoIbge] [char](2) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[IdUf] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[UnidadeFederativa] ON 

INSERT [dbo].[UnidadeFederativa] ([IdUf], [Descricao], [Sigla], [CodigoIbge]) VALUES (1, N'Acre', N'AC', N'12')
INSERT [dbo].[UnidadeFederativa] ([IdUf], [Descricao], [Sigla], [CodigoIbge]) VALUES (2, N'Alagoas', N'AL', N'27')
INSERT [dbo].[UnidadeFederativa] ([IdUf], [Descricao], [Sigla], [CodigoIbge]) VALUES (3, N'Amapá', N'AP', N'16')
INSERT [dbo].[UnidadeFederativa] ([IdUf], [Descricao], [Sigla], [CodigoIbge]) VALUES (4, N'Amazonas', N'AM', N'13')
INSERT [dbo].[UnidadeFederativa] ([IdUf], [Descricao], [Sigla], [CodigoIbge]) VALUES (5, N'Bahia', N'BA', N'29')
INSERT [dbo].[UnidadeFederativa] ([IdUf], [Descricao], [Sigla], [CodigoIbge]) VALUES (6, N'Ceará', N'CE', N'23')
INSERT [dbo].[UnidadeFederativa] ([IdUf], [Descricao], [Sigla], [CodigoIbge]) VALUES (7, N'Distrito Federal', N'DF', N'53')
INSERT [dbo].[UnidadeFederativa] ([IdUf], [Descricao], [Sigla], [CodigoIbge]) VALUES (8, N'Espírito Santo', N'ES', N'32')
INSERT [dbo].[UnidadeFederativa] ([IdUf], [Descricao], [Sigla], [CodigoIbge]) VALUES (9, N'Goiás', N'GO', N'52')
INSERT [dbo].[UnidadeFederativa] ([IdUf], [Descricao], [Sigla], [CodigoIbge]) VALUES (10, N'Maranhão', N'MA', N'21')
INSERT [dbo].[UnidadeFederativa] ([IdUf], [Descricao], [Sigla], [CodigoIbge]) VALUES (11, N'Mato Grosso', N'MT', N'51')
INSERT [dbo].[UnidadeFederativa] ([IdUf], [Descricao], [Sigla], [CodigoIbge]) VALUES (12, N'Mato Grosso do Sul', N'MS', N'50')
INSERT [dbo].[UnidadeFederativa] ([IdUf], [Descricao], [Sigla], [CodigoIbge]) VALUES (13, N'Minas Gerais', N'MG', N'31')
INSERT [dbo].[UnidadeFederativa] ([IdUf], [Descricao], [Sigla], [CodigoIbge]) VALUES (14, N'Pará', N'PA', N'15')
INSERT [dbo].[UnidadeFederativa] ([IdUf], [Descricao], [Sigla], [CodigoIbge]) VALUES (15, N'Paraíba', N'PB', N'25')
INSERT [dbo].[UnidadeFederativa] ([IdUf], [Descricao], [Sigla], [CodigoIbge]) VALUES (16, N'Paraná', N'PR', N'41')
INSERT [dbo].[UnidadeFederativa] ([IdUf], [Descricao], [Sigla], [CodigoIbge]) VALUES (17, N'Pernambuco', N'PE', N'26')
INSERT [dbo].[UnidadeFederativa] ([IdUf], [Descricao], [Sigla], [CodigoIbge]) VALUES (18, N'Piauí', N'PI', N'22')
INSERT [dbo].[UnidadeFederativa] ([IdUf], [Descricao], [Sigla], [CodigoIbge]) VALUES (19, N'Rio de Janeiro', N'RJ', N'33')
INSERT [dbo].[UnidadeFederativa] ([IdUf], [Descricao], [Sigla], [CodigoIbge]) VALUES (20, N'Rio Grande do Norte', N'RN', N'24')
INSERT [dbo].[UnidadeFederativa] ([IdUf], [Descricao], [Sigla], [CodigoIbge]) VALUES (21, N'Rio Grande do Sul', N'RS', N'43')
INSERT [dbo].[UnidadeFederativa] ([IdUf], [Descricao], [Sigla], [CodigoIbge]) VALUES (22, N'Rondônia', N'RO', N'11')
INSERT [dbo].[UnidadeFederativa] ([IdUf], [Descricao], [Sigla], [CodigoIbge]) VALUES (23, N'Roraima', N'RR', N'14')
INSERT [dbo].[UnidadeFederativa] ([IdUf], [Descricao], [Sigla], [CodigoIbge]) VALUES (24, N'Santa Catarina', N'SC', N'42')
INSERT [dbo].[UnidadeFederativa] ([IdUf], [Descricao], [Sigla], [CodigoIbge]) VALUES (25, N'São Paulo', N'SP', N'35')
INSERT [dbo].[UnidadeFederativa] ([IdUf], [Descricao], [Sigla], [CodigoIbge]) VALUES (26, N'Sergipe', N'SE', N'28')
INSERT [dbo].[UnidadeFederativa] ([IdUf], [Descricao], [Sigla], [CodigoIbge]) VALUES (27, N'Tocantins', N'TO', N'17')
SET IDENTITY_INSERT [dbo].[UnidadeFederativa] OFF
GO
SET ANSI_PADDING ON
GO
/****** Object:  Index [Un_PontoTuristico_Nome_Uf_Cidade]    Script Date: 12/01/2025 23:36:10 ******/
ALTER TABLE [dbo].[PontoTuristico] ADD  CONSTRAINT [Un_PontoTuristico_Nome_Uf_Cidade] UNIQUE NONCLUSTERED 
(
	[Nome] ASC,
	[IdUf] ASC,
	[Cidade] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, SORT_IN_TEMPDB = OFF, IGNORE_DUP_KEY = OFF, ONLINE = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
GO
ALTER TABLE [dbo].[PontoTuristico]  WITH CHECK ADD  CONSTRAINT [Fk_PontoTuristico_IdUf_UnidadeFederativa_IdUf] FOREIGN KEY([IdUf])
REFERENCES [dbo].[UnidadeFederativa] ([IdUf])
GO
ALTER TABLE [dbo].[PontoTuristico] CHECK CONSTRAINT [Fk_PontoTuristico_IdUf_UnidadeFederativa_IdUf]
GO
USE [master]
GO
ALTER DATABASE [PontoTuristico] SET  READ_WRITE 
GO
