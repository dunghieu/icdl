import {useEffect, useState} from 'react';
import axios from 'axios';
import ExamTable from 'components/common/table/ExamTable';
import {useHistory} from 'react-router-dom';

const Exam = () => {
  const [data, setData] = useState([]);
  const history = useHistory();
  const fetchData = async () => {
    const getData = await axios.get('http://localhost:8080/api/exam');
    const finalData = getData.data;
    setData(finalData);
  };
  const handleDelete = async (id: number) => {
    if (confirm('Bạn có chắc chắn muốn xóa?')) {
      const count = await axios.get(`http://localhost:8080/api/student-exam-mapping?examId=${id}`);
      if (count.data.length > 0) {
        alert('Không thể xóa kì thi này!');
        return;
      }
      await axios.delete(`http://localhost:8080/api/exam/${id}`);
      fetchData();
    }
  };
  const handleEdit = async (id: number, state?: any) => {
    history.push(`/admin/exam/create?edit=true`, {id, ...state});
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <ExamTable rows={data} handleDelete={handleDelete} handleEdit={handleEdit} />
    </>
  );
};

export default Exam;
