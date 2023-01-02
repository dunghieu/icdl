import {useEffect, useState} from 'react';
import {useHistory} from 'react-router-dom';
import axios from 'axios';
import CourseTable from 'components/common/table/CourseTable';

const Course = () => {
  const [data, setData] = useState([]);
  const history = useHistory();

  const fetchData = async () => {
    const getData = await axios.get('http://localhost:8080/api/course');
    const finalData = getData.data;
    setData(finalData);
  };

  const handleDelete = async (id: number, count: number) => {
    if (confirm('Bạn có chắc chắn muốn xóa?')) {
      if (count > 0) {
        alert('Không thể xóa khóa học đã có sinh viên đăng ký');
        return;
      }
      await axios.delete(`http://localhost:8080/api/course/${id}`);
    }
    fetchData();
  };
  const handleEdit = async (id: number, state?: any) => {
    history.push(`/admin/course/create?edit=true`, {id, ...state});
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <CourseTable rows={data} handleDelete={handleDelete} handleEdit={handleEdit} />
    </>
  );
};

export default Course;
