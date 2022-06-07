USE [metronic]
GO

/****** Object:  Table [dbo].[refreshToken]    Script Date: 7/6/2022 01:59:31 ******/
SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[refreshToken](
	[id] [int] IDENTITY(1,1) NOT NULL,
	[token] [varchar](4000) NULL,
	[expires] [datetime] NULL,
	[created] [datetime] NULL,
	[createdByIp] [varchar](50) NULL,
	[revoked] [datetime] NULL,
	[revokedByIp] [varchar](50) NULL,
	[replacedByToken] [varchar](4000) NULL,
	[userId] [int] NULL,
 CONSTRAINT [PK_refreshToken] PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO

ALTER TABLE [dbo].[refreshToken]  WITH CHECK ADD  CONSTRAINT [FK_refreshToken_users] FOREIGN KEY([userId])
REFERENCES [dbo].[users] ([id])
GO

ALTER TABLE [dbo].[refreshToken] CHECK CONSTRAINT [FK_refreshToken_users]
GO


