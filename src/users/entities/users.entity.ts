import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

// Entity là một class ánh xạ tới một database table (hoặc collection khi sử dụng MongoDB). Bạn có thể tạo một thực thể bằng cách xác định một lớp mới và đánh dấu nó bằng: @Entity() decorator. Bạn có thể cung cấp tùy chọn cho decorator để xác định tên bảng, cột và các giá trị mặc định cho cột.

@Entity({ name: 'users' })
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: 255, nullable: false })
  name: string;

  @Column({ unique: true, type: 'varchar', length: 255, nullable: false })
  email: string;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;
}
