import mongoose from 'mongoose';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  badge: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  department: { type: String, required: true },
  clearance: { type: String, required: true }
});

// Seed default user if database is empty
userSchema.statics.seedDefaultUser = async function() {
  const count = await this.countDocuments();
  if (count === 0) {
    const hashedPassword = await bcrypt.hash('password123', 10);
    await this.create({
      name: 'Dr. Sarah Chen',
      badge: 'CS-7729',
      password: hashedPassword,
      department: 'Forensic DNA Analysis',
      clearance: 'Level 4'
    });
    console.log('Seeded default user CS-7729 / password123');
  }
};

const User = mongoose.model('User', userSchema);
export default User;
